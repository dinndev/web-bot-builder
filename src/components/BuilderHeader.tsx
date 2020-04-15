import React from 'react'
import layout from '../assets/icons/layout.png'
import brushbucket from '../assets/icons/brushbucket.png'
import robot from '../assets/icons/robot.png'
import www from '../assets/icons/www.png'


const pathObjects = [
    {
        title: "Choose type",
        icon: layout
    },
    {
        title: "Template",
        icon: brushbucket
    },
    {
        title: "Bot information",
        icon: robot
    },
    {
        title: "Deploy",
        icon: www
    }
]

const BuilderHeader = (props: any) => {

    return (
        <div className="builder-header flex justify-around">
            <BuilderPaths {...props} />
        </div>
    )
}



// const BuilderPaths = (props: any) => {
//     let paths: any = []
//     for (let i = 0; i < 4; i++) {
//         let pathStyle = getPathStyle(i, props.currentPath)
//         paths.push(
//             <div key={i} className={`builder-path flex cursor-default w-full justify-start items-center pl-10 ${pathStyle.bg}`} onClick={}>
//                 <img className={`${pathStyle.img} path-image mx-4`} src={pathObjects[i].icon} alt={pathObjects[i].title} />
//                 <span className={`path-title ${pathStyle.title} font-medium`}>
//                     {pathObjects[i].title}
//                 </span>
//             </div >
//         )
//     }

//     return paths
// }

class BuilderPaths extends React.Component<any> {


    generatePaths() {
        let paths: any = []
        for (let i = 0; i < 4; i++) {
            let pathStyle = getPathStyle(i, this.props.currentPath)
            paths.push(
                <div key={i} className={`builder-path flex cursor-default w-full justify-start items-center pl-10 ${pathStyle.bg}`} onClick={() => this.handlePathClick(i, pathStyle.isDone)} >
                    <img className={`${pathStyle.img} path-image mx-4`} src={pathObjects[i].icon} alt={pathObjects[i].title} />
                    <span className={`path-title ${pathStyle.title} font-medium`}>
                        {pathObjects[i].title}
                    </span>
                </div >
            )
        }

        return paths
    }

    handlePathClick(i: number, isDone: boolean) {
        if (isDone) {
            this.props.onClick(i)
        }
    }

    render() {
        return (
            this.generatePaths()
        )
    }
}


function getPathStyle(index: number, current: number) {
    let isCurrent = index === current
    let undone = index > current

    if (isCurrent) {
        return { isDone: false, bg: "bg-pink", img: "invert", title: "text-white" }
    } else if (undone) {
        return { isDone: false, bg: "", img: "invert-80", title: 'invert-80' }
    } else {
        return { isDone: true, bg: "", img: "", title: "" }
    }
}


export default BuilderHeader