import { Dispatch, SetStateAction } from "react";

export type ActionInfoModalProps = {
  message: string;
  closeModalState: Dispatch<SetStateAction<boolean>>;
}