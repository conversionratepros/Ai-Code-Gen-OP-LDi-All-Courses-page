(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "cro-t-57_58";
    /* all Pure helper functions */

    function waitForElement(selector, trigger) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    function live(selector, event, callback, context) {
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this &&
        this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    function insertHtml(selector, content, position) {
      var el = document.querySelector(selector);
      if (!position) {
        position = "afterend";
      }
      if (el && content) {
        el.insertAdjacentHTML(position, content);
      }
    }
    function addClass(el, cls) {
      var el = document.querySelector(el);
      if (el) {
        el.classList.add(cls);
      }
    }
    function removeClass(el, cls) {
      var el = document.querySelector(el);
      if (el) {
        el.classList.contains(cls) && el.classList.remove(cls);
      }
    }

    var topBannerPart = `<section class="cro-t-57_58-top-banner">
      <div class="cro-t-57_58-top-banner-wrapper cro-container">
        <div class="cro-t-57_58-top-banner-inner">
          <div class="cro-t-57_58-top-banner-heading">
            <div class="cro-t-57_58-top-banner-heading-top">POSTGRADUATE DENTAL COURSES</div>
            <div class="cro-t-57_58-top-banner-main-heading">Online postgraduate courses for dental professionals</div>
          </div>
          <div class="cro-t-57_58-top-banner-sub-heading">From mastering orthodontics to advanced restorative care, learn more about our range of UK-accredited postgraduate dental courses and study online.</div>
        </div>
      </div>
    </section>`;

    var diplomaCard = `<div class="cro-t-86-Diploma-cards">
      <div class="cro-t-86-Diploma-card-wrapper cro-container">
        <div class="cro-t-86-Diploma-card-container">
          <div class="cro-t-86-Diploma-card Diploma-1">
            <div class="cro-t-86-Diploma-card-top-part">
              <div class="cro-t-86-Diploma-card-img">
                <img src="https://media.londondentalinstitute.com/wp-content/uploads/2024/11/12213837/Rectangle-40-768x405.png" alt="" class="cro-Diploma-img" />
              </div>
              <h3 class="cro-t-86-Diploma-card-main-header">Diploma in Orthodontics & Dentofacial Orthopaedics (Eduqual Level 7)</h3>
              <div class="cro-t-86-Diploma-card-main-sub-header">12-month online programme</div>
            </div>
            <div class="cro-t-57-content-and-button">
              <div class="cro-t-57-content cro-t-57-content1 croShow" cro-index="1">
                <div class="cro-t-57-header" index="1">
                  <div class="cro-t-57-header-text">Who is it best for?</div>
                  <div class="cro-t-57-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="cro-faq-close-icon">
                      <path
                        d="M15.8648 2.64133C19.2225 6.09445 19.1451 11.6127 15.692 14.9703C12.2388 18.3279 6.72063 18.2506 3.363 14.7974C0.00536323 11.3443 0.0827336 5.8261 3.53586 2.46846C6.98898 -0.889168 12.5072 -0.811798 15.8648 2.64133ZM4.57285 13.621C7.26876 16.3936 11.7178 16.4809 14.5156 13.7604C17.2881 11.0645 17.3509 6.59031 14.655 3.81772C11.9346 1.01994 7.48484 0.982409 4.71226 3.67832C1.91447 6.39874 1.85243 10.8232 4.57285 13.621ZM13.652 9.7456L10.5697 9.70238L10.5013 12.8091C10.523 13.0332 10.3214 13.2293 10.0728 13.2258L8.97912 13.2104C8.73055 13.207 8.53449 13.0053 8.56248 12.7819L8.6057 9.69971L5.49895 9.63129C5.27489 9.65301 5.07882 9.45136 5.08231 9.2028L5.09764 8.1091C5.10113 7.86053 5.30277 7.66446 5.52613 7.69246L8.63358 7.71117L8.67679 4.62892C8.65507 4.40487 8.85672 4.2088 9.10528 4.21228L10.199 4.22762C10.4475 4.2311 10.6436 4.43275 10.6156 4.65611L10.5969 7.76356L13.6792 7.80677C13.9032 7.78505 14.0993 7.98669 14.0958 8.23526L14.0805 9.32896C14.077 9.57753 13.8753 9.77359 13.652 9.7456Z"
                        fill="#00A9E0"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none" class="cro-faq-open-icon">
                      <path d="M17.3334 8.5C17.3334 12.5891 13.8063 16 9.33337 16C4.86047 16 1.33337 12.5891 1.33337 8.5C1.33337 4.41095 4.86047 1 9.33337 1C13.8063 1 17.3334 4.41095 17.3334 8.5Z" stroke="#00A9E0" stroke-width="2" />
                      <rect x="5.33337" y="8" width="8" height="2" rx="1" fill="#00A9E0" />
                    </svg>
                  </div>
                </div>
                <div class="cro-t-57-drop-down">
                  <div class="cro-t-57-drop-down-text">
                    <ul class="cro-t-57-drop-down-ul">
                      <li class="cro-t-57-drop-down-list">Dentists with limited or moderate orthodontic experience</li>
                      <li class="cro-t-57-drop-down-list">Dentists treating aligner cases</li>
                      <li class="cro-t-57-drop-down-list">Dentists seeking to advance their qualifications</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cro-t-57-content cro-t-57-content2" cro-index="2">
                <div class="cro-t-57-header" index="2">
                  <div class="cro-t-57-header-text">What is the focus?</div>
                  <div class="cro-t-57-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="cro-faq-close-icon">
                      <path
                        d="M15.8648 2.64133C19.2225 6.09445 19.1451 11.6127 15.692 14.9703C12.2388 18.3279 6.72063 18.2506 3.363 14.7974C0.00536323 11.3443 0.0827336 5.8261 3.53586 2.46846C6.98898 -0.889168 12.5072 -0.811798 15.8648 2.64133ZM4.57285 13.621C7.26876 16.3936 11.7178 16.4809 14.5156 13.7604C17.2881 11.0645 17.3509 6.59031 14.655 3.81772C11.9346 1.01994 7.48484 0.982409 4.71226 3.67832C1.91447 6.39874 1.85243 10.8232 4.57285 13.621ZM13.652 9.7456L10.5697 9.70238L10.5013 12.8091C10.523 13.0332 10.3214 13.2293 10.0728 13.2258L8.97912 13.2104C8.73055 13.207 8.53449 13.0053 8.56248 12.7819L8.6057 9.69971L5.49895 9.63129C5.27489 9.65301 5.07882 9.45136 5.08231 9.2028L5.09764 8.1091C5.10113 7.86053 5.30277 7.66446 5.52613 7.69246L8.63358 7.71117L8.67679 4.62892C8.65507 4.40487 8.85672 4.2088 9.10528 4.21228L10.199 4.22762C10.4475 4.2311 10.6436 4.43275 10.6156 4.65611L10.5969 7.76356L13.6792 7.80677C13.9032 7.78505 14.0993 7.98669 14.0958 8.23526L14.0805 9.32896C14.077 9.57753 13.8753 9.77359 13.652 9.7456Z"
                        fill="#00A9E0"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none" class="cro-faq-open-icon">
                      <path d="M17.3334 8.5C17.3334 12.5891 13.8063 16 9.33337 16C4.86047 16 1.33337 12.5891 1.33337 8.5C1.33337 4.41095 4.86047 1 9.33337 1C13.8063 1 17.3334 4.41095 17.3334 8.5Z" stroke="#00A9E0" stroke-width="2" />
                      <rect x="5.33337" y="8" width="8" height="2" rx="1" fill="#00A9E0" />
                    </svg>
                  </div>
                </div>
                <div class="cro-t-57-drop-down">
                  <div class="cro-t-57-drop-down-text">
                    <ul class="cro-t-57-drop-down-ul">
                      <li class="cro-t-57-drop-down-list">Fixed and removable appliances</li>
                      <li class="cro-t-57-drop-down-list">Clear aligners</li>
                      <li class="cro-t-57-drop-down-list">Orthodontic Assessment</li>
                      <li class="cro-t-57-drop-down-list">Treatment Planning</li>
                      <p class="cro-t-57-show-more">Read More</p>
                      <li class="cro-t-57-drop-down-list">Case selection</li>
                      <li class="cro-t-57-drop-down-list">Appliance suitability</li>
                      <li class="cro-t-57-drop-down-list">Clear aligner biomechanics</li>
                      <li class="cro-t-57-drop-down-list">Introduction of TADs in practice</li>
                      <li class="cro-t-57-drop-down-list">Digital orthodontics</li>
                      <p class="cro-t-57-show-less" style="display: none;">Read Less</p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cro-t-57-content cro-t-57-content3" cro-index="3">
                <div class="cro-t-57-header" index="3">
                  <div class="cro-t-57-header-text">Which key skills are covered?</div>
                  <div class="cro-t-57-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="cro-faq-close-icon">
                      <path
                        d="M15.8648 2.64133C19.2225 6.09445 19.1451 11.6127 15.692 14.9703C12.2388 18.3279 6.72063 18.2506 3.363 14.7974C0.00536323 11.3443 0.0827336 5.8261 3.53586 2.46846C6.98898 -0.889168 12.5072 -0.811798 15.8648 2.64133ZM4.57285 13.621C7.26876 16.3936 11.7178 16.4809 14.5156 13.7604C17.2881 11.0645 17.3509 6.59031 14.655 3.81772C11.9346 1.01994 7.48484 0.982409 4.71226 3.67832C1.91447 6.39874 1.85243 10.8232 4.57285 13.621ZM13.652 9.7456L10.5697 9.70238L10.5013 12.8091C10.523 13.0332 10.3214 13.2293 10.0728 13.2258L8.97912 13.2104C8.73055 13.207 8.53449 13.0053 8.56248 12.7819L8.6057 9.69971L5.49895 9.63129C5.27489 9.65301 5.07882 9.45136 5.08231 9.2028L5.09764 8.1091C5.10113 7.86053 5.30277 7.66446 5.52613 7.69246L8.63358 7.71117L8.67679 4.62892C8.65507 4.40487 8.85672 4.2088 9.10528 4.21228L10.199 4.22762C10.4475 4.2311 10.6436 4.43275 10.6156 4.65611L10.5969 7.76356L13.6792 7.80677C13.9032 7.78505 14.0993 7.98669 14.0958 8.23526L14.0805 9.32896C14.077 9.57753 13.8753 9.77359 13.652 9.7456Z"
                        fill="#00A9E0"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none" class="cro-faq-open-icon">
                      <path d="M17.3334 8.5C17.3334 12.5891 13.8063 16 9.33337 16C4.86047 16 1.33337 12.5891 1.33337 8.5C1.33337 4.41095 4.86047 1 9.33337 1C13.8063 1 17.3334 4.41095 17.3334 8.5Z" stroke="#00A9E0" stroke-width="2" />
                      <rect x="5.33337" y="8" width="8" height="2" rx="1" fill="#00A9E0" />
                    </svg>
                  </div>
                </div>
                <div class="cro-t-57-drop-down">
                  <div class="cro-t-57-drop-down-text">
                    <ul class="cro-t-57-drop-down-ul">
                      <li class="cro-t-57-drop-down-list">Orthodontic assessment</li>
                      <li class="cro-t-57-drop-down-list">Cephalometry</li>
                      <li class="cro-t-57-drop-down-list">Advanced treatment planning</li>
                      <li class="cro-t-57-drop-down-list">Fixed appliances</li>
                      <p class="cro-t-57-show-more">Read More</p>
                      <li class="cro-t-57-drop-down-list">Aligner therapy</li>
                      <li class="cro-t-57-drop-down-list">TADS placement</li>
                      <p class="cro-t-57-show-less" style="display: none;">Read Less</p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cro-t-57-content-button-course">
                <a href="https://londondentalinstitute.com/orthodontics-dentofacial-orthopaedics/" class="cro-t-57-button" data-convert-linking-binding="done">View Course</a>
              </div>
            </div>
          </div>
          <div class="cro-t-86-Diploma-card Diploma-2">
            <div class="cro-t-86-Diploma-card-top-part">
              <div class="cro-t-86-Diploma-card-img">
                <img src="https://media.londondentalinstitute.com/wp-content/uploads/2024/11/12213837/Rectangle-41-768x404.png" alt="" class="cro-Diploma-img" />
              </div>
              <h3 class="cro-t-86-Diploma-card-main-header">Diploma in Aesthetic & Restorative Dentistry (Eduqual Level 7)</h3>
              <div class="cro-t-86-Diploma-card-main-sub-header">12-month online programme</div>
            </div>
            <div class="cro-t-57-content-and-button">
              <div class="cro-t-57-content cro-t-57-content1 croShow" cro-index="1">
                <div class="cro-t-57-header" index="1">
                  <div class="cro-t-57-header-text">Who is it best for?</div>
                  <div class="cro-t-57-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="cro-faq-close-icon">
                      <path
                        d="M15.8648 2.64133C19.2225 6.09445 19.1451 11.6127 15.692 14.9703C12.2388 18.3279 6.72063 18.2506 3.363 14.7974C0.00536323 11.3443 0.0827336 5.8261 3.53586 2.46846C6.98898 -0.889168 12.5072 -0.811798 15.8648 2.64133ZM4.57285 13.621C7.26876 16.3936 11.7178 16.4809 14.5156 13.7604C17.2881 11.0645 17.3509 6.59031 14.655 3.81772C11.9346 1.01994 7.48484 0.982409 4.71226 3.67832C1.91447 6.39874 1.85243 10.8232 4.57285 13.621ZM13.652 9.7456L10.5697 9.70238L10.5013 12.8091C10.523 13.0332 10.3214 13.2293 10.0728 13.2258L8.97912 13.2104C8.73055 13.207 8.53449 13.0053 8.56248 12.7819L8.6057 9.69971L5.49895 9.63129C5.27489 9.65301 5.07882 9.45136 5.08231 9.2028L5.09764 8.1091C5.10113 7.86053 5.30277 7.66446 5.52613 7.69246L8.63358 7.71117L8.67679 4.62892C8.65507 4.40487 8.85672 4.2088 9.10528 4.21228L10.199 4.22762C10.4475 4.2311 10.6436 4.43275 10.6156 4.65611L10.5969 7.76356L13.6792 7.80677C13.9032 7.78505 14.0993 7.98669 14.0958 8.23526L14.0805 9.32896C14.077 9.57753 13.8753 9.77359 13.652 9.7456Z"
                        fill="#00A9E0"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none" class="cro-faq-open-icon">
                      <path d="M17.3334 8.5C17.3334 12.5891 13.8063 16 9.33337 16C4.86047 16 1.33337 12.5891 1.33337 8.5C1.33337 4.41095 4.86047 1 9.33337 1C13.8063 1 17.3334 4.41095 17.3334 8.5Z" stroke="#00A9E0" stroke-width="2" />
                      <rect x="5.33337" y="8" width="8" height="2" rx="1" fill="#00A9E0" />
                    </svg>
                  </div>
                </div>
                <div class="cro-t-57-drop-down">
                  <div class="cro-t-57-drop-down-text">
                    <ul class="cro-dentist-list">
                      <li class="cro-t-57-drop-down-list">Practising dentists</li>
                      <li class="cro-t-57-drop-down-list">Both moderately and highly experienced dentists</li>
                      <li class="cro-t-57-drop-down-list">Dentists seeking to advance their qualifications</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cro-t-57-content cro-t-57-content2" cro-index="2">
                <div class="cro-t-57-header" index="2">
                  <div class="cro-t-57-header-text">What is the focus?</div>
                  <div class="cro-t-57-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="cro-faq-close-icon">
                      <path
                        d="M15.8648 2.64133C19.2225 6.09445 19.1451 11.6127 15.692 14.9703C12.2388 18.3279 6.72063 18.2506 3.363 14.7974C0.00536323 11.3443 0.0827336 5.8261 3.53586 2.46846C6.98898 -0.889168 12.5072 -0.811798 15.8648 2.64133ZM4.57285 13.621C7.26876 16.3936 11.7178 16.4809 14.5156 13.7604C17.2881 11.0645 17.3509 6.59031 14.655 3.81772C11.9346 1.01994 7.48484 0.982409 4.71226 3.67832C1.91447 6.39874 1.85243 10.8232 4.57285 13.621ZM13.652 9.7456L10.5697 9.70238L10.5013 12.8091C10.523 13.0332 10.3214 13.2293 10.0728 13.2258L8.97912 13.2104C8.73055 13.207 8.53449 13.0053 8.56248 12.7819L8.6057 9.69971L5.49895 9.63129C5.27489 9.65301 5.07882 9.45136 5.08231 9.2028L5.09764 8.1091C5.10113 7.86053 5.30277 7.66446 5.52613 7.69246L8.63358 7.71117L8.67679 4.62892C8.65507 4.40487 8.85672 4.2088 9.10528 4.21228L10.199 4.22762C10.4475 4.2311 10.6436 4.43275 10.6156 4.65611L10.5969 7.76356L13.6792 7.80677C13.9032 7.78505 14.0993 7.98669 14.0958 8.23526L14.0805 9.32896C14.077 9.57753 13.8753 9.77359 13.652 9.7456Z"
                        fill="#00A9E0"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none" class="cro-faq-open-icon">
                      <path d="M17.3334 8.5C17.3334 12.5891 13.8063 16 9.33337 16C4.86047 16 1.33337 12.5891 1.33337 8.5C1.33337 4.41095 4.86047 1 9.33337 1C13.8063 1 17.3334 4.41095 17.3334 8.5Z" stroke="#00A9E0" stroke-width="2" />
                      <rect x="5.33337" y="8" width="8" height="2" rx="1" fill="#00A9E0" />
                    </svg>
                  </div>
                </div>
                <div class="cro-t-57-drop-down">
                  <div class="cro-t-57-drop-down-text">
                    <ul class="cro-t-57-drop-down-ul">
                      <li class="cro-t-57-drop-down-list">Contemporary clinical techniques</li>
                      <li class="cro-t-57-drop-down-list">Biomimetics</li>
                      <li class="cro-t-57-drop-down-list">Smile design</li>
                      <li class="cro-t-57-drop-down-list">Modern aesthetic treatments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cro-t-57-content cro-t-57-content3" cro-index="3">
                <div class="cro-t-57-header" index="3">
                  <div class="cro-t-57-header-text">Which key skills are covered?</div>
                  <div class="cro-t-57-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="cro-faq-close-icon">
                      <path
                        d="M15.8648 2.64133C19.2225 6.09445 19.1451 11.6127 15.692 14.9703C12.2388 18.3279 6.72063 18.2506 3.363 14.7974C0.00536323 11.3443 0.0827336 5.8261 3.53586 2.46846C6.98898 -0.889168 12.5072 -0.811798 15.8648 2.64133ZM4.57285 13.621C7.26876 16.3936 11.7178 16.4809 14.5156 13.7604C17.2881 11.0645 17.3509 6.59031 14.655 3.81772C11.9346 1.01994 7.48484 0.982409 4.71226 3.67832C1.91447 6.39874 1.85243 10.8232 4.57285 13.621ZM13.652 9.7456L10.5697 9.70238L10.5013 12.8091C10.523 13.0332 10.3214 13.2293 10.0728 13.2258L8.97912 13.2104C8.73055 13.207 8.53449 13.0053 8.56248 12.7819L8.6057 9.69971L5.49895 9.63129C5.27489 9.65301 5.07882 9.45136 5.08231 9.2028L5.09764 8.1091C5.10113 7.86053 5.30277 7.66446 5.52613 7.69246L8.63358 7.71117L8.67679 4.62892C8.65507 4.40487 8.85672 4.2088 9.10528 4.21228L10.199 4.22762C10.4475 4.2311 10.6436 4.43275 10.6156 4.65611L10.5969 7.76356L13.6792 7.80677C13.9032 7.78505 14.0993 7.98669 14.0958 8.23526L14.0805 9.32896C14.077 9.57753 13.8753 9.77359 13.652 9.7456Z"
                        fill="#00A9E0"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none" class="cro-faq-open-icon">
                      <path d="M17.3334 8.5C17.3334 12.5891 13.8063 16 9.33337 16C4.86047 16 1.33337 12.5891 1.33337 8.5C1.33337 4.41095 4.86047 1 9.33337 1C13.8063 1 17.3334 4.41095 17.3334 8.5Z" stroke="#00A9E0" stroke-width="2" />
                      <rect x="5.33337" y="8" width="8" height="2" rx="1" fill="#00A9E0" />
                    </svg>
                  </div>
                </div>
                <div class="cro-t-57-drop-down">
                  <div class="cro-t-57-drop-down-text">
                    <ul class="cro-t-57-drop-down-ul">
                      <li class="cro-t-57-drop-down-list">Direct and indirect restorations</li>
                      <li class="cro-t-57-drop-down-list">Smile design</li>
                      <li class="cro-t-57-drop-down-list">Bonding, isolation</li>
                      <li class="cro-t-57-drop-down-list">Shade analysis</li>
                      <p class="cro-t-57-show-more">Read More</p>
                      <li class="cro-t-57-drop-down-list">Aesthetic implant restorations</li>
                      <li class="cro-t-57-drop-down-list">Advanced case treatment planning</li>
                      <li class="cro-t-57-drop-down-list">Contemporary dental materials</li>
                      <li class="cro-t-57-drop-down-list">Digital dentistry</li>
                      <p class="cro-t-57-show-less" style="display: none;">Read Less</p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cro-t-57-content-button-course">
                <a href="https://londondentalinstitute.com/aesthetic-restorative-dentistry/" class="cro-t-57-button" data-convert-linking-binding="done">View Course</a>
              </div>
            </div>
          </div>
          <div class="cro-t-86-Diploma-card Diploma-3">
            <div class="cro-t-86-Diploma-card-top-part">
              <div class="cro-t-86-Diploma-card-img">
                <img src="https://media.londondentalinstitute.com/wp-content/uploads/2024/11/12213836/Rectangle-34-768x405.png" alt="" class="cro-Diploma-img" />
              </div>
              <h3 class="cro-t-86-Diploma-card-main-header">Diploma in Dental Implantology & Oral Surgery (Eduqual Level 7)</h3>
              <div class="cro-t-86-Diploma-card-main-sub-header">12-month online programme</div>
            </div>
            <div class="cro-t-57-content-and-button">
              <div class="cro-t-57-content cro-t-57-content1 croShow" cro-index="1">
                <div class="cro-t-57-header" index="1">
                  <div class="cro-t-57-header-text">Who is it best for?</div>
                  <div class="cro-t-57-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="cro-faq-close-icon">
                      <path
                        d="M15.8648 2.64133C19.2225 6.09445 19.1451 11.6127 15.692 14.9703C12.2388 18.3279 6.72063 18.2506 3.363 14.7974C0.00536323 11.3443 0.0827336 5.8261 3.53586 2.46846C6.98898 -0.889168 12.5072 -0.811798 15.8648 2.64133ZM4.57285 13.621C7.26876 16.3936 11.7178 16.4809 14.5156 13.7604C17.2881 11.0645 17.3509 6.59031 14.655 3.81772C11.9346 1.01994 7.48484 0.982409 4.71226 3.67832C1.91447 6.39874 1.85243 10.8232 4.57285 13.621ZM13.652 9.7456L10.5697 9.70238L10.5013 12.8091C10.523 13.0332 10.3214 13.2293 10.0728 13.2258L8.97912 13.2104C8.73055 13.207 8.53449 13.0053 8.56248 12.7819L8.6057 9.69971L5.49895 9.63129C5.27489 9.65301 5.07882 9.45136 5.08231 9.2028L5.09764 8.1091C5.10113 7.86053 5.30277 7.66446 5.52613 7.69246L8.63358 7.71117L8.67679 4.62892C8.65507 4.40487 8.85672 4.2088 9.10528 4.21228L10.199 4.22762C10.4475 4.2311 10.6436 4.43275 10.6156 4.65611L10.5969 7.76356L13.6792 7.80677C13.9032 7.78505 14.0993 7.98669 14.0958 8.23526L14.0805 9.32896C14.077 9.57753 13.8753 9.77359 13.652 9.7456Z"
                        fill="#00A9E0"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none" class="cro-faq-open-icon">
                      <path d="M17.3334 8.5C17.3334 12.5891 13.8063 16 9.33337 16C4.86047 16 1.33337 12.5891 1.33337 8.5C1.33337 4.41095 4.86047 1 9.33337 1C13.8063 1 17.3334 4.41095 17.3334 8.5Z" stroke="#00A9E0" stroke-width="2" />
                      <rect x="5.33337" y="8" width="8" height="2" rx="1" fill="#00A9E0" />
                    </svg>
                  </div>
                </div>
                <div class="cro-t-57-drop-down">
                  <div class="cro-t-57-drop-down-text">
                    <ul class="cro-t-57-drop-down-ul">
                      <li class="cro-t-57-drop-down-list">Dentists with little to moderate experience</li>
                      <li class="cro-t-57-drop-down-list">Dentists looking to refine their surgical expertise</li>
                      <li class="cro-t-57-drop-down-list">Dentists seeking confidence in implant treatments</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cro-t-57-content cro-t-57-content2" cro-index="2">
                <div class="cro-t-57-header" index="2">
                  <div class="cro-t-57-header-text">What is the focus?</div>
                  <div class="cro-t-57-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="cro-faq-close-icon">
                      <path
                        d="M15.8648 2.64133C19.2225 6.09445 19.1451 11.6127 15.692 14.9703C12.2388 18.3279 6.72063 18.2506 3.363 14.7974C0.00536323 11.3443 0.0827336 5.8261 3.53586 2.46846C6.98898 -0.889168 12.5072 -0.811798 15.8648 2.64133ZM4.57285 13.621C7.26876 16.3936 11.7178 16.4809 14.5156 13.7604C17.2881 11.0645 17.3509 6.59031 14.655 3.81772C11.9346 1.01994 7.48484 0.982409 4.71226 3.67832C1.91447 6.39874 1.85243 10.8232 4.57285 13.621ZM13.652 9.7456L10.5697 9.70238L10.5013 12.8091C10.523 13.0332 10.3214 13.2293 10.0728 13.2258L8.97912 13.2104C8.73055 13.207 8.53449 13.0053 8.56248 12.7819L8.6057 9.69971L5.49895 9.63129C5.27489 9.65301 5.07882 9.45136 5.08231 9.2028L5.09764 8.1091C5.10113 7.86053 5.30277 7.66446 5.52613 7.69246L8.63358 7.71117L8.67679 4.62892C8.65507 4.40487 8.85672 4.2088 9.10528 4.21228L10.199 4.22762C10.4475 4.2311 10.6436 4.43275 10.6156 4.65611L10.5969 7.76356L13.6792 7.80677C13.9032 7.78505 14.0993 7.98669 14.0958 8.23526L14.0805 9.32896C14.077 9.57753 13.8753 9.77359 13.652 9.7456Z"
                        fill="#00A9E0"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none" class="cro-faq-open-icon">
                      <path d="M17.3334 8.5C17.3334 12.5891 13.8063 16 9.33337 16C4.86047 16 1.33337 12.5891 1.33337 8.5C1.33337 4.41095 4.86047 1 9.33337 1C13.8063 1 17.3334 4.41095 17.3334 8.5Z" stroke="#00A9E0" stroke-width="2" />
                      <rect x="5.33337" y="8" width="8" height="2" rx="1" fill="#00A9E0" />
                    </svg>
                  </div>
                </div>
                <div class="cro-t-57-drop-down">
                  <div class="cro-t-57-drop-down-text">
                    <ul class="cro-t-57-drop-down-ul">
                      <li class="cro-t-57-drop-down-list">Implant surgical planning</li>
                      <li class="cro-t-57-drop-down-list">Bone and soft tissue management</li>
                      <li class="cro-t-57-drop-down-list">Teaching on advanced techniques</li>
                      <li class="cro-t-57-drop-down-list">Zygomatic implants</li>
                      <p class="cro-t-57-show-more">Read More</p>
                      <li class="cro-t-57-drop-down-list">Optional in-person cadaver courses</li>
                      <p class="cro-t-57-show-less" style="display: none;">Read Less</p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cro-t-57-content cro-t-57-content3" cro-index="3">
                <div class="cro-t-57-header" index="3">
                  <div class="cro-t-57-header-text">Which key skills are covered?</div>
                  <div class="cro-t-57-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none" class="cro-faq-close-icon">
                      <path
                        d="M15.8648 2.64133C19.2225 6.09445 19.1451 11.6127 15.692 14.9703C12.2388 18.3279 6.72063 18.2506 3.363 14.7974C0.00536323 11.3443 0.0827336 5.8261 3.53586 2.46846C6.98898 -0.889168 12.5072 -0.811798 15.8648 2.64133ZM4.57285 13.621C7.26876 16.3936 11.7178 16.4809 14.5156 13.7604C17.2881 11.0645 17.3509 6.59031 14.655 3.81772C11.9346 1.01994 7.48484 0.982409 4.71226 3.67832C1.91447 6.39874 1.85243 10.8232 4.57285 13.621ZM13.652 9.7456L10.5697 9.70238L10.5013 12.8091C10.523 13.0332 10.3214 13.2293 10.0728 13.2258L8.97912 13.2104C8.73055 13.207 8.53449 13.0053 8.56248 12.7819L8.6057 9.69971L5.49895 9.63129C5.27489 9.65301 5.07882 9.45136 5.08231 9.2028L5.09764 8.1091C5.10113 7.86053 5.30277 7.66446 5.52613 7.69246L8.63358 7.71117L8.67679 4.62892C8.65507 4.40487 8.85672 4.2088 9.10528 4.21228L10.199 4.22762C10.4475 4.2311 10.6436 4.43275 10.6156 4.65611L10.5969 7.76356L13.6792 7.80677C13.9032 7.78505 14.0993 7.98669 14.0958 8.23526L14.0805 9.32896C14.077 9.57753 13.8753 9.77359 13.652 9.7456Z"
                        fill="#00A9E0"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none" class="cro-faq-open-icon">
                      <path d="M17.3334 8.5C17.3334 12.5891 13.8063 16 9.33337 16C4.86047 16 1.33337 12.5891 1.33337 8.5C1.33337 4.41095 4.86047 1 9.33337 1C13.8063 1 17.3334 4.41095 17.3334 8.5Z" stroke="#00A9E0" stroke-width="2" />
                      <rect x="5.33337" y="8" width="8" height="2" rx="1" fill="#00A9E0" />
                    </svg>
                  </div>
                </div>
                <div class="cro-t-57-drop-down">
                  <div class="cro-t-57-drop-down-text">
                    <ul class="cro-t-57-drop-down-ul">
                      <li class="cro-t-57-drop-down-list">Surgical patient assessment</li>
                      <li class="cro-t-57-drop-down-list">Implant placement</li>
                      <li class="cro-t-57-drop-down-list">Bone augmentation</li>
                      <li class="cro-t-57-drop-down-list">Digital implantology</li>
                      <p class="cro-t-57-show-more">Read More</p>
                      <li class="cro-t-57-drop-down-list">Implant maintenance</li>
                      <li class="cro-t-57-drop-down-list">Implant restorations</li>
                      <p class="cro-t-57-show-less" style="display: none;">Read Less</p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="cro-t-57-content-button-course">
                <a href="https://londondentalinstitute.com/dental-implantology-oral-surgery/" class="cro-t-57-button" data-convert-linking-binding="done">View Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    /* Variation Init */
    function init() {
      addClass("body", variation_name);
      addClass("body", "hideBtn");

      waitForElement("#content section h1.elementor-heading-title", function () {
        document.querySelectorAll("#content section h1.elementor-heading-title").forEach(function (e) {
          var parent = e.closest("section.elementor-top-section");
          if (parent && e.innerHTML.indexOf("POSTGRADUATE DENTAL COURSES") !== -1) {
            parent.classList.add("cro57_58_hero-banner");
          }
        });
      });
      waitForElement("section.cro57_58_hero-banner", function () {
        if (!document.querySelector(".cro-t-57_58-top-banner")) {
          insertHtml("section.cro57_58_hero-banner", topBannerPart, "afterend");
        }
      });
      waitForElement(".cro-t-57_58-top-banner", function () {
        if (!document.querySelector(".cro-t-86-Diploma-card")) {
          insertHtml(".cro-t-57_58-top-banner", diplomaCard, "afterend");
        }
      });

      // .bb-elementor-content>div
      waitForElement("section .elementor-widget-container h2", function () {
        document.querySelectorAll("section .elementor-widget-container h2").forEach(function (e) {
          var parent = e.closest("section");
          var text = e.textContent;

          if (text.indexOf("UK Accreditation for dentists from across the world") !== -1) {
            parent.classList.add("cro-t-57_58-accreditation");
          }
          if (text.indexOf("Why dentists love our courses") !== -1) {
            parent.classList.add("cro-t-57_58-dentists");
          }
          if (text.indexOf("What makes studying at the LDi different") !== -1) {
            parent.classList.add("cro-t-57_58-LDiDifferent");
          }
          if (text.indexOf("Academic excellence is accessible wherever") !== -1) {
            parent.classList.add("cro-t-57_58-academy");
          }
          if (text.indexOf("Our programme partners") !== -1) {
            parent.classList.add("cro-t-57_58-partners");
          }
          if (text.indexOf("Learn from international expert tutors") !== -1) {
            parent.classList.add("cro-t-57_58-tutors");
          }
          // if (text.indexOf('Frequently asked questions') !== -1) {
          // 	parent.classList.add('cro-t-57_58-Faq');
          // }
        });
      });

      waitForElement("section .elementor-widget-container h2", function () {
        document.querySelectorAll("section .elementor-widget-container h2").forEach(function (e) {
          var parentTwo = e.closest("section.elementor-top-section");
          var text = e.textContent;
          if (text.indexOf("Frequently asked questions") !== -1) {
            parentTwo.classList.add("cro-t-57_58-Faq");
          }
        });
      });

      // Wait for the original buttons to exist
      var checkInterval = setInterval(function () {
        var originals = document.querySelectorAll('a.elementor-button.elementor-button-link[href="#courses"]');

        originals.forEach(function (original) {
          var parent = original.parentElement;
          var clone = document.createElement("div");
          clone.className = original.className + " cro-clone-button";
          clone.textContent = original.textContent; // Copy the text content of the original button
          if (!parent.querySelector(".cro-clone-button")) {
            original.insertAdjacentElement("afterend", clone);
          }
        });
      }, 100);

      setTimeout(function () {
        clearInterval(checkInterval);
      }, 5000);
    }

    function even_handler() {
      live(".cro-t-57-header", "click", function () {
        var index = this.getAttribute("index");

        if (window.innerWidth > 949) {
          // Desktop logic: open one group, close others
          var content = document.querySelectorAll(`.cro-t-57-content[cro-index='${index}']`);

          if (content[0].classList.contains("croShow")) {
            content.forEach(function (el) {
              el.classList.remove("croShow");
            });
          } else {
            document.querySelectorAll(".cro-t-57-content").forEach(function (el) {
              el.classList.remove("croShow");
            });

            content.forEach(function (el) {
              el.classList.add("croShow");
            });

            var findShow = document.querySelectorAll(".cro-t-57-content.cro-show_more");
            findShow.forEach(function (element) {
              element.classList.remove("cro-show_more");
            });
          }
        } else {
          // Mobile logic: each .cro-t-86-Diploma-card acts independently
          var parentCard = this.closest(".cro-t-86-Diploma-card");
          var content1 = parentCard.querySelector(`.cro-t-57-content[cro-index='${index}']`);

          if (content1.classList.contains("croShow")) {
            content1.classList.remove("croShow");
          } else {
            parentCard.querySelectorAll(".cro-t-57-content").forEach(function (el) {
              el.classList.remove("croShow");
            });
            content1.classList.add("croShow");
          }
        }
      });

      live(".cro-t-57-show-more", "click", function () {
        var mainCard = this.closest(".cro-t-57-content");
        mainCard.classList.add("cro-show_more");
        // addClass("body", "cro-show_more")
      });

      live(".cro-t-57-show-less", "click", function () {
        // removeClass("body", "cro-show_more")
        var mainCard = this.closest(".cro-t-57-content");
        mainCard.classList.remove("cro-show_more");
      });

      live(".cro-clone-button", "click", function () {
        var target = document.querySelector(".cro-t-86-Diploma-cards");
        if (target && target.offsetHeight > 0) {
          var top = target.getBoundingClientRect().top + window.scrollY - 100;

          window.scrollTo({
            top: top,
            behavior: "smooth",
          });
        }
      });
    }

    if (!window.croTest57) {
      waitForElement("body", init);
      even_handler();
      window.croTest57 = true;
    }

    /* Initialise variation */
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();