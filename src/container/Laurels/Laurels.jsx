import React from 'react';
import { SubHeading } from '../../components';
import { images , data } from '../../constants';
import './Laurels.css';
const AwardCard =({award:{imgUrl,title,subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
      <p className='p__cormorant' >{subtitle}</p>
    </div>
  </div>
)
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>{/**this is going to be on the left side of the page */}
      <SubHeading title="Awards & recognition"/>
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {/**The .map() method allows you to run a function on each item in the array, returning a new array as the result. */}
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
        {/**data.awards refers to an array of awards stored in the data object. Each award object in the array contains properties like imgUrl, title, and subtitle.
        The .map() method is called on the data.awards array. It takes a function as an argument, which will be applied to each item in the array.
        For each award in the data.awards array, the function is executed. It takes the award as an argument, and it returns a new AwardCard component with the award object passed as a prop: <AwardCard award={award} key={award.title}/>
        The key prop is used to uniquely identify each AwardCard component in the list. It helps React keep track of the components and optimize their rendering.
        The map() method processes each award in the data.awards array, and as a result, it creates a new array of AwardCard components.
        Finally, this new array of AwardCard components is rendered inside the div with the class app__laurels_awards.
        So, in summary, the map() method is used here to iterate over the data.awards array, create a new AwardCard component for each award, and render them as a list of laurels or awards on the webpage.
         */}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
