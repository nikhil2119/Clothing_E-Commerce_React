import LightLogo from "../Images/light-logo.png";

function Welcomepage() {
    return (
        <>
            <header class="hero-section-home" >
                <div class="content">
                    <img src={LightLogo} class="logo" alt=""/>
                        <p class="sub-heading">best fashion collection of all time</p>
                </div>
            </header>
        </>
    )
}

export default Welcomepage;