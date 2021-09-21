import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import {useState, useEffect} from 'react'
import {Loader} from '../../utils/style/Atoms'
import {useFetch, useTheme} from '../../utils/hooks'


const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const Loadd = styled(Loader)`
  margin-left:800px
  
`



function Freelances() {
 {/* const [isLoading, setIsLoading] = useState(false)
  const [freelancersList, setFreelancersList] = useState()
  const [lerror, setLerror] = useState('')
  useEffect(() => {
    setIsLoading(true)
    async function fetchProfils(){
      try {
        const response = await fetch('http://localhost:8000/freelances')
        const {freelancersList} = await response.json()
        setFreelancersList(freelancersList)
        console.log(freelancersList)
      } catch (error) {
        console.log(error)
        setLerror(error)
        
      }
      finally{
        setIsLoading(false)
      
      }
    }
    fetchProfils()
  
  }, [])*/}
  const {data,isLoading,error} = useFetch('http://localhost:8000/freelances')
  const  {freelancersList}=data
  const {theme} = useTheme()

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
        <CardsContainer>
          {freelancersList ?(
            
            freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                title={profile.name}
                picture = {profile.picture}
              />
            ))
          
          ):(
            isLoading ? (
              <Loadd theme={theme} data-testid="loader" />
            ):(
           
              <span>ooops ARMEL  !!!!!</span>
            )
            
          )}
        </CardsContainer>
    </div>
  )
}

export default Freelances
