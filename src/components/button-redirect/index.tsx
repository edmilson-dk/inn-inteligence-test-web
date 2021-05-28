import { ButtonRedirectWrapper } from "../../styles/components/button-redirect";
import { ButtonRedirectProps } from "./types";

export function ButtonRedirect({ label, redirectPath, icon }: ButtonRedirectProps) {
  return (
    <ButtonRedirectWrapper className="flex-center">
      { label }
      <span>
        { icon }
      </span>
    </ButtonRedirectWrapper>
  )
}