function Hello({userName,textColor})
{
    let style = {color:textColor};
    return(
        <div>
            <h2 style={style}>Hello {userName} !</h2>
        </div>
    )
}
export default Hello;