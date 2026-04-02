"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "../../../../public/styles/admin.css";
import { DepartmentSection, DepartmentConfig } from "../../../../libs/utils/definitions";
import {
  reorderDepartmentSections,
  removeDepartmentSection,
} from "../../../../libs/action";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

function SortableItem({
  section,
  departmentSlug,
  onDelete,
  adminBase,
}: {
  section: DepartmentSection;
  departmentSlug: string;
  onDelete: (id: number) => Promise<void>;
  adminBase: string;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const showConfirmModal = () => {
    confirmAlert({
      title: "Confirmer la suppression",
      message: `Supprimer la section "${section.title}" ?`,
      buttons: [
        {
          label: "Oui",
          onClick: () => onDelete(section.id),
        },
        { label: "Non", onClick: () => {} },
      ],
    });
  };

  return (
    <tr ref={setNodeRef} style={style}>
      <td
        {...attributes}
        {...listeners}
        style={{ cursor: "grab", width: "40px", textAlign: "center" }}
      >
        <i className="fa-solid fa-grip-vertical"></i>
      </td>
      <td style={{ width: "60px" }}>
        {section.image_url ? (
          <img
            src={section.image_url}
            alt={section.image_alt}
            style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }}
          />
        ) : (
          <span style={{ color: "#999", fontSize: "12px" }}>Texte seul</span>
        )}
      </td>
      <td>{section.title}</td>
      <td style={{ width: "120px", textAlign: "right" }}>
        <Link
          href={`${adminBase}/edit/${section.id}`}
          className="table-action"
          style={{ marginRight: "10px" }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
        <button
          onClick={showConfirmModal}
          className="table-action"
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  );
}

export default function AdminDepartementSections({
  sections: initialSections,
  department,
  backUrl,
}: {
  sections: DepartmentSection[];
  department: DepartmentConfig;
  backUrl?: string;
}) {
  const adminBase = backUrl || `/admin/departements/${department.slug}`;
  const [sections, setSections] = useState(initialSections);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    try {
      await removeDepartmentSection(id, department.slug);
      setSections((prev) => prev.filter((s) => s.id !== id));
      toast.success("Section supprimée");
      router.refresh();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Erreur lors de la suppression");
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex((s) => s.id === active.id);
    const newIndex = sections.findIndex((s) => s.id === over.id);
    const newSections = arrayMove(sections, oldIndex, newIndex);
    setSections(newSections);

    try {
      const orderedIds = newSections.map((s) => s.id);
      await reorderDepartmentSections(orderedIds, department.slug);
      toast.success("Ordre mis à jour");
    } catch {
      setSections(initialSections);
      toast.error("Erreur lors de la réorganisation");
    }
  };

  return (
    <div className="col-lg-8 col-md-12">
      <div className="content-details">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h3>{department.pageTitle}</h3>
          <Link
            href={`${adminBase}/create`}
            className="btn btn-primary"
          >
            + Ajouter une section
          </Link>
        </div>

        {!backUrl && (
          <Link
            href="/admin/departements"
            style={{ marginBottom: "20px", display: "inline-block" }}
          >
            &larr; Retour aux départements
          </Link>
        )}

        <div className="table-responsive mt-20">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Titre</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <SortableContext
                  items={sections.map((s) => s.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {sections.map((section) => (
                    <SortableItem
                      key={section.id}
                      section={section}
                      departmentSlug={department.slug}
                      onDelete={handleDelete}
                      adminBase={adminBase}
                    />
                  ))}
                </SortableContext>
              </tbody>
            </table>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
