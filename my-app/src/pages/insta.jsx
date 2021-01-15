import {React, Component} from 'react';
import axios from 'axios';
import Carousel from "react-elastic-carousel";
import {Spring} from 'react-spring/renderprops'
import "../styles/instagram.css"

class Insta extends Component {
  state = {
    instaData: []
  }

  breakPoints = [
    {width: 500, itemsToShow: 1},
    {width: 700, itemsToShow: 2},
    {width: 800, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ];

   async componentDidMount() {
     let data = []
     let amount_picutres = "10"

     let url = "https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables="
     url += "{%22id%22:%2238710761139%22,%22first%22:"
     url += amount_picutres + "}"

     const instaSource = await axios.get(url)

     console.log(instaSource.data.data.user.edge_owner_to_timeline_media.edges)

     const mediaArray = instaSource.data.data.user
                          .edge_owner_to_timeline_media.edges

     mediaArray.map(el => {
       const node = el.node
       data.push(node)
     })
     this.setState({instaData: data})
   }

  renderInstaPics = () => {
    return this.state.instaData.map((media, index) => {
      return (
        <div key={index}>
          <img className="card" src={media.thumbnail_src}
          alt="insta"
          style={{width: "200px"}}
          />
        </div>
      )
    })
  }

  render() {
    return(
      <Carousel style={{position: "absolute", bottom: "0px"}}
        breakPoints={this.breakPoints}>{this.state.instaData ? this.renderInstaPics() : ""}
      </Carousel>
    )
  }
}

export default Insta;
