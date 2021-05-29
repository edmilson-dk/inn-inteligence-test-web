import { ReactNode } from "react";

export type MoviePreviewCardProps = {
  data: any;
  displayInfosClick: (id: string) => void;
  buttonIcon: ReactNode;
  buttonActionClick: () => void;
}