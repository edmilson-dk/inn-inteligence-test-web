import { FiSearch } from "react-icons/fi";

import { Container } from "../../styles/components/container";
import { HomeContainer, HomeWrapper } from "../../styles/screens/home";

export function Home() {
  return (
    <HomeWrapper>
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