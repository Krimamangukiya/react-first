import React from "react";
import Card from "./Card";
import Footer from "./Footer";
function Mainbody() {
    return (
        < >
            <p className="title">The Rick and Morty API</p>
            <div className='bg'>
                <div className='w-1200'>
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/159.jpeg'} name1='Hunter' desc='Dead  - Human' descl='Earth(Giant Telepathic Spiders Dimension)' descf='The Ricks Must Be Crazy' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/161.jpeg'} name1='Hydrogen-F' desc='Alive - Alien' descl='Alphabetrium' descf='Get Schwifty' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/178.jpeg'} name1='Jerrys Mytholog' desc='Dead - Mythological Creature' descl='Nuptia 4' descf='Big Troubl in Little Sanchez' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/334.jpeg'} name1='Stealy' desc='Alive - Poopybutthole' descl='Interimensional Cable' descf='Interimensional Cable 2: Tempting Fate' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/515.jpeg'} name1='Caterpillar Mr.Goldnfold' desc='Dead - Animal' descl='Earth(Wasp Dimension)' descf='Edge of Tomorty:Rick,Die,Rickpeat' />
                    <Card img={'https://rickandmortyapi.com/api/character/avatar/644.jpeg'} name1='Old Glorzo' desc='Dead - Alien' descl='Glorzo Asteroid' descf='Promottyus' />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Mainbody