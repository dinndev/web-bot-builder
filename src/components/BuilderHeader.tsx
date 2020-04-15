import React from 'react'
import layout from '../assets/icons/layout.png'
import brushbucket from '../assets/icons/brushbucket.png'
import robot from '../assets/icons/robot.png'
import www from '../assets/icons/www.png'


const pathObjects = [
    {
        title: "Template",
        icon: layout
    },
    {
        title: "Design",
        icon: brushbucket
    },
    {
        title: "Avatar",
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


class BuilderPaths extends React.Component<any> {
    generatePaths() {
        let paths: any = []
        for (let i = 0; i < 4; i++) {
            let isCurrent = i === this.props.currentPath
            paths.push(
                <div key={i} className={`builder-path flex  w-full justify-start items-center ${isCurrent ? 'bg-pink cursor-default' : "cursor-pointer path-hover"}`} onClick={() => this.props.onClick(i)} >
                    <img className={`${isCurrent ? "invert" : ""} path-image mx-4`} src={pathObjects[i].icon} alt={pathObjects[i].title} />
                    <span className={`path-title ${isCurrent ? 'text-white' : ""} font-medium`}>
                        {pathObjects[i].title}
                    </span>
                </div >
            )
        }

        return paths
    }

    render() {
        return (
            this.generatePaths()
        )
    }
}


export default BuilderHeader