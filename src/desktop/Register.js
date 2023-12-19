import { Step, Container, Grid, Segment, Form, Radio, Header, Button, Input, Icon, Modal } from "semantic-ui-react"
import './style.css'
import { Link, useNavigate } from "react-router-dom"
import { useReducer, useState } from "react"
import { useRegisterMutation } from "../features/api/apiSlice"

const initialState = {
    open: false,
    size: undefined
}

function reducer(state, action){
    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'close':
            return {open: false}
        default:
            return new Error("No case Found")
    }
   
}
export const Register = ({mobile}) => {

        const navigate = useNavigate()
        const gender_options = [
            {'key': '1', 'text': 'Male', 'value': 'Male'},
            {'key': '2', 'text': 'Female', 'value': 'Female'},
        ]
        const countryOptions = [
            { key: 'af', value: 'af', text: 'Afghanistan' },
            { key: 'ax', value: 'ax', text: 'Aland Islands' },
            { key: 'al', value: 'al', text: 'Albania' },
            { key: 'dz', value: 'dz', text: 'Algeria' },
            { key: 'as', value: 'as', text: 'American Samoa' },
            { key: 'ad', value: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', text: 'Angola' },
            { key: 'ai', value: 'ai', text: 'Anguilla' },
            { key: 'ag', value: 'ag', text: 'Antigua' },
            { key: 'ar', value: 'ar', text: 'Argentina' },
            { key: 'am', value: 'am', text: 'Armenia' },
            { key: 'aw', value: 'aw', text: 'Aruba' },
            { key: 'au', value: 'au', text: 'Australia' },
            { key: 'at', value: 'at', text: 'Austria' },
            { key: 'az', value: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', text: 'Bahrain' },
            { key: 'bd', value: 'bd', text: 'Bangladesh' },
            { key: 'bb', value: 'bb', text: 'Barbados' },
            { key: 'by', value: 'by', text: 'Belarus' },
            { key: 'be', value: 'be', text: 'Belgium' },
            { key: 'bz', value: 'bz', text: 'Belize' },
            { key: 'bj', value: 'bj', text: 'Benin' },
          ]

    const [state, dispatch] = useReducer(reducer, initialState) 
    const {open, size} = state

    const [step1, setstep1] = useState(true)
    const [step2, setstep2] = useState(false)
    const [step3, setstep3] = useState(false)
    const [step4, setstep4] = useState(false)


    const [loading, setloading] = useState(false)

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [occupation, setoccupation] = useState("")
    const [country, setcountry] = useState("")
    const [gender, setgender] = useState("")
    const [address, setaddress] = useState("")
    const [suite, setsuite] = useState("")
    const [city, setcity] = useState("")
    const [stateorigin, setstate] = useState("")
    const [zipcode, setzipcode] = useState("")

    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")

    const [socialsecurity, setsocialsecurity] = useState("")
    const [confirmsocialsecurity, setconfirmsocialsecurity] = useState("")
    const [dob, setdob] = useState("")

    const [fnameError, setfnameError] = useState(false)
    const [lnameError, setlnameError] = useState(false)
    const [occupationError, setoccupationError] = useState(false)
    const [countryError, setcountryError] = useState(false)
    const [genderError, setgenderError] = useState(false)
    const [addressError, setaddressError] = useState(false)
    const [suiteError, setsuiteError] = useState(false)
    const [cityError, setcityError] = useState(false)
    const [stateError, setstateError] = useState(false)
    const [zipcodeError, setzipcodeError] = useState(false)

    const [emailError, setEmailError] = useState(false)
    const [phoneError, setphoneError] = useState(false)
    const [usernameError, setusernameError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [confirmpasswordError, setconfirmpasswordError] = useState(false)

    const [socialsecurityError, setsocialsecurityError] = useState(false)
    const [confirmsocialsecurityError, setconfirmsocialsecurityError] = useState(false)
    const [dobError, setdobError] = useState(false)

    const [profileimage, setprofileimage] = useState("")
    const [cardimagefront, setcardimagefront] = useState("")
    const [cardimageback, setcardimageback] = useState("")

    const [profileimageError, setprofileimageError] = useState(false)
    const [cardimagefrontError, setcardimagefrontError] = useState(false)
    const [cardimagebackError, setcardimagebackError] = useState(false)

    let imageurl;
    let imageurl1;
    let imageurl2;

    const uploadImage = async (e) => {
        try{
            let imageURL;
        
            if(
                profileimage && 
                 (
                    profileimage.type === "image/png" ||
                    profileimage.type === "image/jpg" ||
                    profileimage.type === "image/jpeg" 
                )
            ){
                const image = new FormData()
                image.append("file", profileimage)
                image.append("cloud_name", "du3ck2joa")
                image.append("upload_preset", "puw7tbqc")

                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/du3ck2joa/image/upload",
                    {
                        method: "post",
                        body: image
                    }
                )
                const imageData = await response.json()
                imageURL = imageData.url.toString()
                imageurl = imageURL
            }
        }catch(error){
            console.log(error)
        }
    }
    const uploadImage1 = async (e) => {
        try{
            let imageURL;
        
            if(
                cardimagefront && 
                 (
                    cardimagefront.type === "image/png" ||
                    cardimagefront.type === "image/jpg" ||
                    cardimagefront.type === "image/jpeg" 
                )
            ){
                const image = new FormData()
                image.append("file", cardimagefront)
                image.append("cloud_name", "du3ck2joa")
                image.append("upload_preset", "puw7tbqc")

                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/du3ck2joa/image/upload",
                    {
                        method: "post",
                        body: image
                    }
                )
                const imageData = await response.json()
                imageURL = imageData.url.toString()
                imageurl1 = imageURL
            }
        }catch(error){
            console.log(error)
        }
    }
    const uploadImage2 = async (e) => {
        try{
            let imageURL;
        
            if(
                cardimageback && 
                 (
                    cardimageback.type === "image/png" ||
                    cardimageback.type === "image/jpg" ||
                    cardimageback.type === "image/jpeg" 
                )
            ){
                const image = new FormData()
                image.append("file", cardimageback)
                image.append("cloud_name", "du3ck2joa")
                image.append("upload_preset", "puw7tbqc")

                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/du3ck2joa/image/upload",
                    {
                        method: "post",
                        body: image
                    }
                )
                const imageData = await response.json()
                imageURL = imageData.url.toString()
                imageurl2 = imageURL
            }
        }catch(error){
            console.log(error)
        }
    }

    const handleProfileImageChange = e => {
        setprofileimage(e.target.files[0])
    }
    const handleCardImageFrontChange = e => {
        setcardimagefront(e.target.files[0])
    }
    const handleCardImageBackChange = e => {
        setcardimageback(e.target.files[0])
    }


    const handlefnChange = e => setfname(e.target.value)
    const handlelnChange = e => setlname(e.target.value)
    const handleoccupationChange = e => setoccupation(e.target.value)
    const handlecountryChange = (e, {value}) => setcountry(value.toString())
    const handlegenderChange = (e, {value}) => setgender(value.toString())
    const handleaddressChange = e => setaddress(e.target.value)
    const handlesuiteChange = e => setsuite(e.target.value)
    const handlecityChange = e => setcity(e.target.value)
    const handlestateChange = e => setstate(e.target.value)
    const handlezipcodeChange = e => setzipcode(e.target.value)

    const handleemailChange = e => setemail(e.target.value)
    const handlephoneChange = e => setphone(e.target.value)
    const handleusernameChange = e => setusername(e.target.value)
    const handlepasswordChange = e => setpassword(e.target.value)
    const handleconfirmpasswordChange = e => setconfirmpassword(e.target.value)

    const handlesocialsecurityChange = e => setsocialsecurity(e.target.value)
    const handleconfirmsocialsecurityChange = e => setconfirmsocialsecurity(e.target.value)
    const handledobChange = e => setdob(e.target.value)

    const onclickNext = () => {
        if(fname === '' ){
            setfnameError({content: 'Empty Field'})
        }else if(lname === ''){
            setlnameError({content: 'Empty Field'})
        }else if(gender === ''){
            setgenderError({content: 'Empty Field'})
        }else if(country === ''){
            setcountryError({content: 'Empty Field'})
        }else if(occupation === ''){
            setoccupationError({content: 'Empty Field'})
        }else if( address === ''){
            setaddressError({content: 'Empty Field'})
        }else if(suite === ''){
            setsuiteError({content: 'Empty Field'})
        }else if(city === ''){
            setcityError({content: 'Empty Field'})
        }else if(state === ''){
            setstateError({content: 'Empty Field'})
        }else if(zipcode === ''){
            setzipcodeError({content: 'Empty Field'})
        }else{
                setstep1(false)
                setstep2(true)
        } 
       
    }
    const onclickPrevious = () => {
        setstep1(true)
        setstep2(false)
        
    }   
    const onclickNextLogin = () => {
        if(email === '' ){
            setEmailError({content: 'Empty Field'})
        }else if( phone === ''){
            setphoneError({content: 'Empty Field'})
        }else if(username === ''){
            setusernameError({content: 'Empty Field'})
        }else if(password === ''){
            setpasswordError({content: 'Empty Field'})
        }else if(confirmpassword === ''){
            setconfirmpasswordError({content: 'Empty Field'})
        }else if(password !== confirmpassword){
            setconfirmpasswordError({content: 'Passwords Do Not Match'})
        }else{
            setstep2(false) 
            setstep3(true)
        }
    }
    const onclickNextIdentity = () => {
        if(socialsecurity ===''){
            setsocialsecurityError({content: 'Empty Field'})
        }else if(confirmsocialsecurity === ''){
            setconfirmsocialsecurityError({content: 'Empty Field'})
        }else if(confirmsocialsecurity !== socialsecurity){
            setconfirmsocialsecurityError({content: 'SSN / TIN Numbers Do Not Match'})
        }else if(dob === ''){
            setdobError({content: 'Empty Field'})
        }else{
            setstep3(false)
            setstep4(true)
        }
    }
    const onclickPreviousNext = () => {
        setstep2(true)
        setstep3(false)
    }
    const onclickPreviousNextAgain = () => {
        setstep3(true)
        setstep4(false)
    }

    const [addUser, {isLoading}] = useRegisterMutation()
    const saveUser = [fname, lname, occupation, 
                      country, gender, address,
                      suite, city, stateorigin, zipcode,
                      email, phone, username,
                      password, confirmpassword,
                      socialsecurity, confirmsocialsecurity, dob
                     ].every(Boolean) && !isLoading

    const onclickSubmit =  () => {
        if(profileimage.length === 0){
            setprofileimageError({content: 'Please upload image'})
        }else if(cardimagefront.length === 0){
            setcardimagefrontError({content: 'Please upload image'})
        }else if(cardimageback.length === 0){
            setcardimagebackError({content: 'Please upload image'})
        }else{
            if(saveUser){
                uploadImage()
                uploadImage1()
                uploadImage2()
                setloading(true)
                setTimeout(() => {
                    try{
                         addUser({
                            fname, lname, occupation, 
                              country, gender, address,
                              suite, city, stateorigin, zipcode,
                              email, phone, username,
                              password, confirmpassword,
                              socialsecurity, confirmsocialsecurity, dob,
                              imageurl, imageurl1,imageurl2
                        }).unwrap()
                        setloading(false)
                        dispatch({type: 'open', size: 'mini'})
                    }catch(error){
                        console.log("Error occurred", error)
                    }
                }, 5000)
               
            }
        }
       

    }
    const onSuccess = () => {
        dispatch({type: 'close'})
        navigate("/login")
    }

if(step1){

            return(
                <>
                <Segment vertical style={{padding: '0em'}}>
                    <Grid textAlign="center" stackable>
                        <Grid.Row>
                            <Grid.Column  width={8} id = "register_bg"
                                style={{
                                    width: '100%',
                                    height: mobile ? '200px' : 'auto',
                                    backgroundSize: 'cover',
                                    color: 'white'
                                }}  
                            >
                                <Header style={{padding: mobile ? '3em 0em' : '10em 0em'}}  as="h2" inverted color="white" content="CREATE YOUR BANK ACCOUNT" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Grid>
                                   <Grid.Row>
                                    <Grid.Column style={{padding: '1.5em 3em'}}>
                                        <Header style={{fontWeight: 'normal'}} content="Fill all form field to go next step" />
                                        
                                    </Grid.Column>
                                   </Grid.Row>  
                                   <Grid.Row>
                                    <Grid.Column>
                                    <Step.Group>
                                        <Step>
                                        <Icon name='user' />
                                        <Step.Content>
                                            <Step.Title>Step one</Step.Title>
                                            <Step.Description>Enter personal information</Step.Description>
                                        </Step.Content>
                                        </Step>
                                    </Step.Group>
                                    </Grid.Column>
                                   </Grid.Row>
                                     
                                   <Grid.Row>
                                        <Grid.Column textAlign="left" style={{padding: '0em 3em'}}>
                                            <Form size="large">
                                            <Header style={{fontWeight: 'normal'}} as="h2" content="Personal Info" />
        
                                                <Form.Group widths={2}>
                                                    <Form.Field >
                                                        <Form.Input
                                                            placeholder="First Name*"
                                                            value={fname}
                                                            onChange={handlefnChange}
                                                            error={fnameError}
                                                            onClick={() => setfnameError(false)}

                                                        />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <Form.Input
                                                            placeholder="Last Name*"
                                                            value={lname}
                                                            onChange={handlelnChange}
                                                            error={lnameError}
                                                            onClick={() => setlnameError(false)}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group widths={2}>
                                                    <Form.Field>
                                                        <Form.Select
                                                            options={gender_options}
                                                            value={gender}
                                                            placeholder="Select gender"
                                                            onChange={handlegenderChange}
                                                            error={genderError}
                                                            onClick={() => setgenderError(false)}
                                                        />
                                                        
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <Form.Select
                                                            placeholder="Select Country"
                                                            options={countryOptions}
                                                            value={country}
                                                            onChange={handlecountryChange}
                                                            error={countryError}
                                                            onClick={() => setcountryError(false)}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>                                                   
                                                    <Form.Field>
                                                        <Form.Input
                                                            placeholder="Occupation*"
                                                            value={occupation}
                                                            onChange={handleoccupationChange}
                                                            error={occupationError}
                                                            onClick={() => setoccupationError(false)}
                                                            
                                                        />
                                                    </Form.Field>        
                                                <Header style={{fontWeight: 'normal'}} as="h2" content="Residential Address" />
        
                                                    <Form.Field>
                                                        <Form.Input
                                                            fluid
                                                            placeholder="Street Address*"
                                                            value={address}
                                                            onChange={handleaddressChange}
                                                            error={addressError}
                                                            onClick={() => setaddressError(false)}
                                                        />
                                                    </Form.Field>
                                                <Form.Group widths={2}>
                                                    <Form.Field>
                                                        <Form.Input
                                                            placeholder="Apt/Suite/Unit*"
                                                            value={suite}
                                                            onChange={handlesuiteChange}
                                                            error={suiteError}
                                                            onClick={() => setsuiteError(false)}
                                                            
                                                        />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <Form.Input
                                                            placeholder="City*"
                                                            value={city}
                                                            onChange={handlecityChange}
                                                            error={cityError}
                                                            onClick={() => setcityError(false)}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group widths={2}>
                                                    <Form.Field>
                                                        <Form.Input
                                                            placeholder="State*"
                                                            value={stateorigin}
                                                            onChange={handlestateChange}
                                                            error={stateError}
                                                            onClick={() => setstateError(false)}
                                                            
                                                        />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <Form.Input
                                                            placeholder="Zip Code*"
                                                            value={zipcode}
                                                            onChange={handlezipcodeChange}
                                                            error={zipcodeError}
                                                            onClick={() => setzipcodeError(false)}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Field style={{textAlign: 'right'}}>
                                                    <Button 
                                                        size="big" 
                                                        color="blue"
                                                        onClick={() => onclickNext()}
                                                    >
                                                        Next
                                                    </Button>
                                                </Form.Field>
        
                                            </Form>
                                        </Grid.Column>
                                    </Grid.Row>             
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                </>
            )
          }else if(step2){
            return(
                <>
                <Segment vertical style={{padding: '0em'}}>
                    <Grid textAlign="center" stackable>
                        <Grid.Row>
                        <Grid.Column  width={8} id = "register_bg"
                                style={{
                                    width: '100%',
                                    height: mobile ? '200px' : 'auto',
                                    backgroundSize: 'cover',
                                    color: 'white'
                                }}  
                            >
                                <Header style={{padding: mobile ? '3em 0em' : '10em 0em'}}  as="h2" inverted color="white" content="CREATE YOUR BANK ACCOUNT" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Grid>
                                   <Grid.Row>
                                    <Grid.Column style={{padding: '1.5em 3em'}}>
                                        <Header style={{fontWeight: 'normal'}} content="Fill all form field to go next step" />
                                        
                                    </Grid.Column>
                                   </Grid.Row>  
                                   <Grid.Row>
                                    <Grid.Column>
                                    <Step.Group>
                                        <Step>
                                        <Icon name='sign in' />
                                        <Step.Content>
                                            <Step.Title>Step two</Step.Title>
                                            <Step.Description>Enter Login information</Step.Description>
                                        </Step.Content>
                                        </Step>
                                    </Step.Group>
                                    </Grid.Column>
                                   </Grid.Row>
                                   <Grid.Row>
                                        <Grid.Column textAlign="left" style={{padding: '0em 3em'}}>
                                            <Form size="large">
                                            <Header style={{fontWeight: 'normal'}} as="h2" content="Create your Login" />
        
                                                    <Form.Field >
                                                        <Form.Input
                                                            fluid
                                                            placeholder="Email*"
                                                            value={email}
                                                            error={emailError}
                                                            onChange={handleemailChange}
                                                            onClick={() => setEmailError(false)}
                                                        />
                                                    </Form.Field>
                                                    <Form.Group widths={2}>

                                                    <Form.Field>
                                                    <Form.Input
                                                            placeholder="Phone no*"
                                                            value={phone}
                                                            error={phoneError}
                                                            onChange={handlephoneChange}
                                                            onClick={() => setphoneError(false)}
                                                        />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <Form.Input
                                                            placeholder="Username*"
                                                            value={username}
                                                            error={usernameError}
                                                            onChange={handleusernameChange}
                                                            onClick={() => setusernameError(false)}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Group widths={2}>
                                                    <Form.Field>
                                                        <Form.Input
                                                            placeholder="Password*"
                                                            type="password"
                                                            value={password}
                                                            error={passwordError}
                                                            onChange={handlepasswordChange}
                                                            onClick={() => setpasswordError(false)}
                                                            
                                                        />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <Form.Input
                                                            placeholder="Confirm Password"
                                                            type="password"
                                                            value={confirmpassword}
                                                            error={confirmpasswordError}
                                                            onChange={handleconfirmpasswordChange}
                                                            onClick={() => setconfirmpasswordError(false)}
                                                        />
                                                    </Form.Field>
                                                </Form.Group>
                                                <Form.Field>
                                                    <Button 
                                                        floated="left" 
                                                        size="big" 
                                                        color="youtube"
                                                        onClick={() => onclickPrevious()}
                                                    >
                                                        Previous
                                                    </Button>
                                                    <Button 
                                                        floated="right" 
                                                        size="big" 
                                                        color="blue"
                                                        onClick={() => onclickNextLogin()}
                                                        
                                                    >
                                                        Next
                                                    </Button>
                                                </Form.Field>
        
                                            </Form>
                                        </Grid.Column>
                                    </Grid.Row>             
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                </>
            )

          }else if(step3){
            return(
                <>
                <Segment vertical style={{padding: '0em'}}>
                    <Grid textAlign="center" stackable>
                        <Grid.Row>
                        <Grid.Column  width={8} id = "register_bg"
                                style={{
                                    width: '100%',
                                    height: mobile ? '200px' : 'auto',
                                    backgroundSize: 'cover',
                                    color: 'white'
                                }}  
                            >
                                <Header style={{padding: mobile ? '3em 0em' : '10em 0em'}}  as="h2" inverted color="white" content="CREATE YOUR BANK ACCOUNT" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Grid>
                                   <Grid.Row>
                                    <Grid.Column style={{padding: '1.5em 3em'}}>
                                        <Header style={{fontWeight: 'normal'}} content="Fill all form field to go next step" />
                                        
                                    </Grid.Column>
                                   </Grid.Row>  
                                   <Grid.Row>
                                    <Grid.Column>
                                    <Step.Group>
                                        <Step>
                                        <Icon name='id card' />
                                        <Step.Content>
                                            <Step.Title>Step three</Step.Title>
                                            <Step.Description>Verify Your Identity</Step.Description>
                                        </Step.Content>
                                        </Step>
                                    </Step.Group>
                                    </Grid.Column>
                                   </Grid.Row>
                                   <Grid.Row>
                                        <Grid.Column textAlign="left" style={{padding: '0em 3em'}}>
                                            <Form size="large">
                                            <Header style={{fontWeight: 'normal'}} as="h4" content="We'er required by law to collect your Social Security Number / TIN." />
        
                                                    <Form.Field >
                                                        <Form.Input
                                                            fluid
                                                            placeholder="Social Security Number / TIN*"
                                                            value={socialsecurity}
                                                            error={socialsecurityError}
                                                            onChange={handlesocialsecurityChange}
                                                            onClick={() => setsocialsecurityError(false)}
                                                        />
                                                    </Form.Field>
                                                    <Form.Field >
                                                        <Form.Input
                                                            fluid
                                                            placeholder="Confirm SSN / TIN*"
                                                            value={confirmsocialsecurity}
                                                            error={confirmsocialsecurityError}
                                                            onChange={handleconfirmsocialsecurityChange}
                                                            onClick={() => setconfirmsocialsecurityError(false)}
                                                        />
                                                    </Form.Field>
                                                    <Form.Field >
                                                        <Form.Input
                                                            fluid
                                                            type="date"
                                                            placeholder="Date of Birth*"
                                                            value={dob}
                                                            error={dobError}
                                                            onChange={handledobChange}
                                                            onClick={() => setdobError(false)}
                                                        />
                                                    </Form.Field>
                                                    <Form.Field>
                                                    <Button 
                                                        floated="left" 
                                                        size="big" 
                                                        color="youtube"
                                                        onClick={() => onclickPreviousNext()}
                                                    >
                                                        Previous
                                                    </Button>
                                                    <Button 
                                                        floated="right" 
                                                        size="big" 
                                                        color="blue"
                                                        onClick={() => onclickNextIdentity()}
                                                        
                                                    >
                                                        Next
                                                    </Button>
                                                </Form.Field>
        
                                            </Form>
                                        </Grid.Column>
                                    </Grid.Row>             
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                </>
            )

          }else if(step4){
            return(
                <>
                <Segment vertical style={{padding: '0em'}}>
                    <Grid textAlign="center" stackable>
                        <Grid.Row>
                        <Grid.Column  width={8} id = "register_bg"
                                style={{
                                    width: '100%',
                                    height: mobile ? '200px' : 'auto',
                                    backgroundSize: 'cover',
                                    color: 'white'
                                }}  
                            >
                                <Header style={{padding: mobile ? '3em 0em' : '10em 0em'}}  as="h2" inverted color="white" content="CREATE YOUR BANK ACCOUNT" />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Grid>
                                   <Grid.Row>
                                    <Grid.Column style={{padding: '1.5em 3em'}}>
                                        <Header style={{fontWeight: 'normal'}} content="Fill all form field to go next step" />
                                        
                                    </Grid.Column>
                                   </Grid.Row>  
                                   <Grid.Row>
                                    <Grid.Column>
                                    <Step.Group>
                                        <Step>
                                        <Icon name='images outline' />
                                        <Step.Content>
                                            <Step.Title>Step four</Step.Title>
                                            <Step.Description>Upload Profile Image</Step.Description>
                                        </Step.Content>
                                        </Step>
                                    </Step.Group>
                                    </Grid.Column>
                                   </Grid.Row>
                                   <Grid.Row>
                                        <Grid.Column textAlign="left" style={{padding: '0em 3em'}}>
                                            <Form size="large">
                                            <Header style={{fontWeight: 'normal'}} as="h4" content="Upload profile Image." />
        
                                                    <Form.Field >
                                                        <Form.Input
                                                            fluid
                                                            type="file"
                                                            icon="upload"
                                                            iconPosition="left"
                                                            name="profileimage"
                                                            placeholder="*Upload Photo"
                                                            accept="image/png, image/jpg, image/jpeg"
                                                            onChange={handleProfileImageChange}
                                                            error={profileimageError}
                                                            onClick={() => setprofileimageError(false)}
                                                        />
                                                    </Form.Field>
                                                    <Form.Field >
                                                        <label>ID CARD FRONT</label>
                                                        <Form.Input
                                                            fluid
                                                            type="file"
                                                            icon="upload"
                                                            iconPosition="left"
                                                            name="cardimagefront"
                                                            placeholder="*Upload Photo"
                                                            accept="image/png, image/jpg, image/jpeg"
                                                            onChange={handleCardImageFrontChange}
                                                            error={cardimagefrontError}
                                                            onClick={() => setcardimagefrontError(false)}
                                                        />
                                                    </Form.Field>
                                                    <Form.Field >
                                                        <label>ID CARD BACK</label>
                                                        <Form.Input
                                                            fluid
                                                            type="file"
                                                            icon="upload"
                                                            iconPosition="left"
                                                            name="cardimageback"
                                                            placeholder="*Upload Photo"
                                                            accept="image/png, image/jpg, image/jpeg"
                                                            onChange={handleCardImageBackChange}
                                                            error={cardimagebackError}
                                                            onClick={() => setcardimagebackError(false)}
                                                          
                                                        />
                                                    </Form.Field>
                                                    <Form.Field>
                                                    {/*<Button 
                                                        floated="left" 
                                                        size="big" 
                                                        color="youtube"
                                                        onClick={() => onclickPreviousNextAgain()}
                                                    >
                                                        Previous
                                                    </Button>*/}
                                                    <Button 
                                                        floated="right" 
                                                        size="big" 
                                                        color="blue"
                                                        loading={loading}
                                                        onClick={() => onclickSubmit()}             
                                                    >
                                                        Submit
                                                    </Button>
                                                </Form.Field>
        
                                            </Form>
                                        </Grid.Column>
                                    </Grid.Row>             
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Modal
                        open={open}
                        size={size}
                    >
                        <Modal.Header>Account Info</Modal.Header>
                        <Modal.Content>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column textAlign="center">
                                        <Icon size="huge" circular inverted color="black" name="user outline" />
                                        <Header content="Your Account Created" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign="center">
                                        <Button 
                                            color="green"
                                            onClick={() => onSuccess()}
                                        >
                                            OK
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Modal.Content>
                    </Modal>
                </Segment>
                </>
            )

          }
          
   
}