export default function Summary(props){
    const {lifeExpectancy, birthday} = props
    const finalYear = parseInt(birthday.split("-")[0]) + lifeExpectancy
    console.log(birthday)
    return(
        <section id = "summary">
            <div>
                <p className = "text-gradient=">
                    <i className = "fa-solid fa-heart-crack" />
                    You&apos;ll probably die in the year {" "}
                    <strong>{finalYear}</strong> {" "} at the age of {" "}
                    <strong>{lifeExpectancy}</strong>.
                </p>
            </div>
            <h4>I don't know what I&apos;m doing lmao</h4>
        </section>
    )
}