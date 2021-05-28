import { FiSearch, FiStar } from "react-icons/fi";

import { ButtonRedirect } from "src/components/button-redirect";
import { Container } from "src/styles/components/container";
import { HomeContainer, HomeWrapper } from "src/styles/screens/home";

export function Home() {
  return (
    <HomeWrapper>
      <ButtonRedirect 
        label="Favorites"
        redirectPath="/favorites"
        icon={<FiStar size="100%"/>}
      />
      <Container>
        <HomeContainer>
          <h1 className="flex-center">
            Movix
            <span>
              <FiSearch size="100%"/>
            </span>
          </h1>
          <form>
            <input type="text" name="search" placeholder="Search..."/>
            <button className="flex-center">
              <span>
                <FiSearch size="100%"/>
              </span>
            </button>
          </form>
        </HomeContainer>
      </Container>
    </HomeWrapper>
  )
}