import React from "react";
import { ReactComponent as ActiveIcon } from "../assets/icons/activeIcon.svg";
import { ReactComponent as ClockIcon } from "../assets/icons/clock.svg";
import { ReactComponent as DraftIcon } from "../assets/icons/draft.svg";
import { ReactComponent as ArchiveIcon } from "../assets/icons/archive.svg";

export const FiltersData = [
  {
    title: "Активные",
    icon: <ActiveIcon />,
  },
  {
    title: "На модерации",
    icon: <ClockIcon />,
  },
  {
    title: "Черновики",
    icon: <DraftIcon />,
  },
  {
    title: "Архив",
    icon: <ArchiveIcon />,
  },
];
