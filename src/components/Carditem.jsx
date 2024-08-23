
// eslint-disable-next-line react/prop-types
function CardItem({title, imgUrl, isVisited, children}){
    return(
        <div>
            <img src={imgUrl} alt=""></img>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
                {isVisited && <span>visistata</span>}
                {!isVisited && <span> non visistata</span>}
            </div>
        </div>
    );
}

export default CardItem;