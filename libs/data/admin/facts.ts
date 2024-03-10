"use server";

import prisma from "../../utils/prisma";

export async function updateDbSettings(
  members: number,
  odonates_data: number,
  actions: number,
  posted_publications: number
) {
  try {
    const updatedSettings = await prisma.setting.update({
      where: {
        id: 1,
      },
      data: {
        members,
        odonates_data,
        actions,
        posted_publications,
      },
    });

    console.log("Settings updated :", updatedSettings);
  } catch (error) {
    console.error("Something went wront while updating settings :", error);
    throw error;
  }
}
