import logo from "../../../interactive-rating-component-main/images/icon-star.svg"

const Form = () => {
    return(
        <div>
            <form>
                <img src={logo} />
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support <br /> request. All feedback is appreciated 
  to help us improve <br /> our offering!</p>
                
                 <button className="umu">1</button>
                 <button className="umu">2</button>
                 <button className="umu">3</button>
                 <button className="umu">4</button>
                 <button className="umu">5</button>
                 <button className="sub">SUBMIT</button>
            </form>
        </div>
    )
}
export default Form;