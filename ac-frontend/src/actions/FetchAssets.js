import { addBug } from './BugActions'
import { addFish } from './FishActions'
import { addSeaCritter } from './SeaCritterActions'
import { addVillager } from './VillagerActions'
import { addDesign } from './DesignActions'

export function fetchAssets(){
    return dispatch => {
        fetch('http://localhost:3001/bugs')
                .then(resp => resp.json())
                .then(bugObj => {
                    console.log({bugObj})
                    return bugObj.data.map(bug => dispatch(addBug(bug.attributes)))
                })
        fetch('http://localhost:3001/fish')
                .then(resp => resp.json())
                .then(fishObj => {
                    return fishObj.data.map(fish => dispatch(addFish(fish.attributes)))
                })
        fetch('http://localhost:3001/sea_critters')
                .then(resp => resp.json())
                .then(sCObj => {
                    return sCObj.data.map(sC => dispatch(addSeaCritter(sC.attributes)))
                })
        fetch('http://localhost:3001/villagers')
                .then(resp => resp.json())
                .then(villagerObj => {
                    return villagerObj.data.map(villager => dispatch(addVillager(villager.attributes)))
                })
        fetch('http://localhost:3001/designs')
                .then(resp => resp.json())
                .then(designObj => {
                    return designObj.data.map(design => dispatch(addDesign(design.attributes)))
                })
    }
}