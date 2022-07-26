import React from "react";

const List = (props) => {
    const {contents} = props;

    console.log(contents)
    if (!contents || contents.lenght === 0) return <h1>No hay datos</h1>

        return (
            <ul>
                {contents.map((content) => {
                    return (
                        <div className="div-list">
                        <li key={content.id}>
                            <span className="Component-Title"> <b>ID: </b> {content.name} </span>
                            </li>
                        </div>
                    )
                })}
            </ul>
        )
}
export default List;