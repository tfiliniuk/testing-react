export const Application = () => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <span title='close'>X</span>
            <img
                src='https://images.unsplash.com/photo-1604933762021-54a5858c9832?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                width='200'
                alt='a person with a laptop'
            />
            <div data-testid='custom-element'>Custom HTML element</div>
            <form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder='Fullname' value='Tania' onChange={() => {}} />
                </div>
                <div>
                    <label htmlFor='bio'>Bio</label>
                    <textarea name='bio' id='bio' />
                </div>
                <div>
                    <label htmlFor='job-location'>Job location</label>
                    <select id='job-location'>
                        <option value=''>Select a country</option>
                        <option value='US'>Unitted States</option>
                        <option value='GB'>Unitted Kingdom</option>
                        <option value='CA'>Canada</option>
                        <option value='IN'>India</option>
                        <option value=''></option>
                        <option value='AU'>Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type='checkbox' id='terms' />I agree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    );
};
