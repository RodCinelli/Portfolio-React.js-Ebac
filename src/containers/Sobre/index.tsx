import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao, ImagemEstilizada } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quisquam
      veritatis, natus itaque consectetur libero cumque repellat, fuga deserunt
      exercitationem suscipit non nam quaerat inventore ducimus iure ea fugit
      distinctio?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=RodCinelli&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <ImagemEstilizada src="https://github-readme-stats.vercel.app/api/top-langs/?username=RodCinelli&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
