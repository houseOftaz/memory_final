
import LinkButton from "../../components/buttons/LinkButton"


function HomeFooter() {

  return (

    <LinkButton linkTo={'/Home-menu'}
                label={'back-to-home'}
                className={'back-to-home-btn'}/>
  )
}

export default HomeFooter;
