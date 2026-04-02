"use server";

import prisma from "../../utils/prisma";

export async function updateDbSettings(data: {
  members: number;
  odonates_data: number;
  actions: number;
  posted_publications: number;
  youtube_url: string;
  team_image_1: string;
  team_title_1: string;
  team_content_1: string;
  team_image_2: string;
  team_title_2: string;
  team_content_2: string;
  team_image_3: string;
  team_title_3: string;
  team_content_3: string;
}) {
  try {
    const updatedSettings = await prisma.setting.update({
      where: {
        id: 1,
      },
      data,
    });

    console.log("Settings updated :", updatedSettings);
  } catch (error) {
    console.error("Something went wront while updating settings :", error);
    throw error;
  }
}
