const contentWrap = document.querySelector('.box__content__wrap')
const users = [
  {
    name: 'Miyah Myles',
    job: 'Marketing',
    img__url: 'https://randomuser.me/api/portraits/women/46.jpg',
    comment:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: 'June Cha',
    job: 'Software Engineer',
    img__url: 'https://randomuser.me/api/portraits/women/44.jpg',
    comment:
      'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
  },
  {
    name: 'Iida Niskanen',
    job: 'Data Entry',
    img__url: 'https://randomuser.me/api/portraits/women/68.jpg',
    comment:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'Renee Sims',
    job: 'Receptionist',
    img__url: 'https://randomuser.me/api/portraits/women/65.jpg',
    comment:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'Jonathan Nunfiez',
    job: 'Graphic Designer',
    img__url: 'https://randomuser.me/api/portraits/men/43.jpg',
    comment:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'Sasha Ho',
    job: 'Accountant',
    img__url:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    comment:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'Veeti Seppanen',
    job: 'Director',
    img__url: 'https://randomuser.me/api/portraits/men/97.jpg',
    comment:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]
function renderContent(user) {
  contentWrap.innerHTML = `
    <p class="box__content__text">${user.comment}</p>
    <div class="box__content__author">
        <div class="author__img">
            <img src="${user.img__url}" alt="">
        </div>

        <div class="author__desc">
            <h6 class="author__desc__name">${user.name}</h6>
            <span class="author__desc__job">${user.job}</span>
        </div>
    </div>
    `
}
let count = 0
renderContent(users[0])
setInterval(() => {
  if (count < 6) {
    count++
  } else count = 0
  renderContent(users[count])
}, 10000)
