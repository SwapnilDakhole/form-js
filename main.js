let body = document.body;
console.log(body);

let container = document.createElement('div');
container.setAttribute('class', 'container');
container.innerHTML = `
    <form action="#">
        <div class="sub-container">
          <img src="user.png" alt="" width="30px" height="30px" />
          <input type="text" placeholder="Username" class="username" />
        </div>
        <div class="sub-container">
          <img src="password.png" alt="" width="30px" height="30px" />
          <input type="password" placeholder="Password" class="username" />
        </div>
        <div class="sub-container">
          <img src="confirm-password.png" alt="" width="30px" height="30px" />
          <input
            type="password"
            placeholder="Confirm Password"
            class="username"
          />
        </div>
        <div class="sub-container">
          <img src="hobbies.png" alt="" width="30px" height="30px" />
          <input
            type="text"
            placeholder="Enter Your Hobbies"
            class="username"
          />
        </div>
        <div class="sub-container">
          <img src="birthday-cake.png" alt="" width="30px" height="30px" />
          <input type="date" placeholder="Enter Your age" class="username" />
        </div>
        <div class="sub-container-2">
          <img src="gender.png" alt="" width="30px" height="30px" />
          <div class="radioBtn">
            <div>
              <label for="male"> Male </label>
              <input type="radio" id="male" name="gender" value="Male" />
            </div>
            <div>
              <label for="female"> Female </label>
              <input type="radio" id="female" name="gender" value="Female" />
            </div>
          </div>
        </div>
        <div class="submit-btn">
          <input type="submit" value="Register" />
          <input type="reset" value="Cancel" />
        </div>
      </form>
`;
body.appendChild(container);
