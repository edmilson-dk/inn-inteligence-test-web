import { Link } from "react-router-dom";

import { ButtonRedirectWrapper } from "../../styles/components/button-redirect";
import { ButtonRedirectProps } from "./types";

export function ButtonRedirect({ label, redirectPath, icon }: ButtonRedirectProps) {
  return (
    <Link to={redirectPath}> 
      <ButtonRedirectWrapper className="flex-center">
        { label }
        <span>
          { icon }
        </span>
      </ButtonRedirectWrapper>
    </Link>
  )
}