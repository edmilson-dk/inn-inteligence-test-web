import { FiCheckCircle, FiX } from "react-icons/fi";
import { ActionInfoModalWrapper } from "src/styles/components/action-info-modal";

import { ActionInfoModalProps } from "./types";

export function ActionInfoModal({ message, closeModalState }: ActionInfoModalProps) {
  return (
    <ActionInfoModalWrapper>
      <article>
        <button type="button" className="flex-center" onClick={() => closeModalState(false)}>
          <span>
            <FiX size="100%"/>
          </span>
        </button>

        <span>
          <FiCheckCircle />
        </span>
        <h3>{ message }</h3>
      </article>
    </ActionInfoModalWrapper>
  )
}