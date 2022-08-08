import React from "react";
import gitHubImg from '../../assets/images/github.png'

function Project() {
  return (
    <section class="row">
      <div class="col-sm-6">
        <div class="card run-buddy-card">
          <div class="card-body">
            <a href="https://bvatuvei.github.io/run-buddy/" class="card-link" target='_blank'>
            <h5 class="card-title secondary-color fw-bold">Run Buddy</h5>
            </a>
            <h6 class="card-subtitle mb-2 secondary-color fw-bold">Html/Css</h6>
            <a href="https://github.com/Bvatuvei/run-buddy/" class="card-link" target='_blank'>
                <img
                src={gitHubImg}
                className='nav-logo-image'
                />
            </a>
          </div>
        </div>
        </div>
        
          <div class="col-sm-6">
        <div class="card stay-protected-card">
          <div class="card-body">
            <a href="https://bvatuvei.github.io/Stay-Protected/" class="card-link" target='_blank'>
            <h5 class="card-title secondary-color fw-bold">Password Generator</h5>
            </a>
            <h6 class="card-subtitle mb-2 secondary-color fw-bold">Javascript</h6>
            <a href="https://github.com/Bvatuvei/Stay-Protected/" class="card-link" target='_blank'>
                <img
                src={gitHubImg}
                className='nav-logo-image'
                />
            </a>
          </div>
        </div>
        </div>

        <div class="col-sm-6">
        <div class="card taskmaster-card">
          <div class="card-body">
            <a href="https://bvatuvei.github.io/taskmaster-pro/" class="card-link" target='_blank'>
            <h5 class="card-title light-color fw-bold">Taskmaster</h5>
            </a>
            <h6 class="card-subtitle mb-2 light-color fw-bold">Jquery/Bootstrap</h6>
            <a href="https://github.com/Bvatuvei/taskmaster-pro/" class="card-link" target='_blank'>
                <img
                src={gitHubImg}
                className='nav-logo-image'
                />
            </a>
          </div>
        </div>
        </div>

        <div class="col-sm-6">
        <div class="card marvelous-gifs-card">
          <div class="card-body">
            <a href="https://mjzabriskie.github.io/marvel-ous-gifs/" class="card-link" target='_blank'>
            <h5 class="card-title light-color fw-bold">Marvelous Gifs</h5>
            </a>
            <h6 class="card-subtitle mb-2 light-color fw-bold">Group-Project/Team-Skills</h6>
            <a href="https://github.com/mjzabriskie/marvel-ous-gifs" class="card-link" target='_blank'>
                <img
                src={gitHubImg}
                className='nav-logo-image'
                />
            </a>
          </div>
        </div>
        </div>

        <div class="col-sm-6">
        <div class="card fitness-tracker-card">
          <div class="card-body">
            <a href="https://enigmatic-tor-51827.herokuapp.com/" class="card-link" target='_blank'>
            <h5 class="card-title secondary-color fw-bold">Fitness Tracker</h5>
            </a>
            <h6 class="card-subtitle mb-2 secondary-color fw-bold">Teamwork/All Back End Skills</h6>
            <a href="https://github.com/JaydenCowley/fitness-tracker" class="card-link" target='_blank'>
                <img
                src={gitHubImg}
                className='nav-logo-image'
                />
            </a>
          </div>
        </div>
        </div>

        <div class="col-sm-6">
        <div class="card react-project-card">
          <div class="card-body">
            <a href="https://bvatuvei.github.io/photo-port/" class="card-link" target='_blank'>
            <h5 class="card-title light-color fw-bold">Photo-Port</h5>
            </a>
            <h6 class="card-subtitle mb-2 light-color fw-bold">React/bootstrap</h6>
            <a href="https://github.com/Bvatuvei/photo-port" class="card-link" target='_blank'>
                <img
                src={gitHubImg}
                className='nav-logo-image'
                />
            </a>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Project;
