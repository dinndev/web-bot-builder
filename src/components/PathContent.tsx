import React from 'react'
import TemplateContent from './TemplateContent'
import DesignContent from './DesignContent'
import AvatarContent from './AvatarContent'
import DeployContent from './DeployContent'



const PathContent = (props: any) => {
    const path = props.currentPath
    return (
        <div className="path-content w-full p-10">
            {generateContent(path)}
        </div>
    )

}

function generateContent(path: number) {
    if (path === 0) return <TemplateContent />
    if (path === 1) return <DesignContent />
    if (path === 2) return <AvatarContent />
    if (path === 3) return <DeployContent />
}




export default PathContent