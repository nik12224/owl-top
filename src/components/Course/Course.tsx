import React from 'react'
import logo from '../../assets/rectangle.png'
import avatar from '../../assets/avatar.svg'
import '../../scss/app.scss'

const Course: React.FC = () => {
	return (
		<div className="container">
			<div className="course">
				<div className="header-course">
					<div className="header-course__left">
						<img src={logo} alt="" />
						<div>
							<h2>Профессия дизайнер от 0 до PRO</h2>
							<span>Photoshop</span>
							<span>Дизайн</span>
						</div>
					</div>
					<div className="header-course__right">
						<div>
							<p className="header-course__price">
								24 000 ₽<span className="price-green">-10 000 ₽ </span>
							</p>
							<span className="header-course__price--dop">цена</span>
						</div>
						<div>
							<p className="header-course__price">
								5 000 ₽<span className="header-course__price--month">/мес</span>
							</p>
							<span className="header-course__price--dop">в кредит</span>
						</div>
						<div className="rating">
							<div>
								<svg
									width="120"
									height="20"
									viewBox="0 0 120 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M19.9477 7.55686C19.816 7.13427 19.4568 6.83508 19.0335 6.79511L13.2601 6.24816L10.9784 0.673859C10.81 0.264321 10.4267 0 10 0C9.57337 0 9.18991 0.264321 9.02252 0.673859L6.74084 6.24816L0.966519 6.79511C0.543233 6.83587 0.184799 7.13507 0.0523506 7.55686C-0.0793348 7.97946 0.0422796 8.44298 0.362414 8.73596L4.72665 12.7293L3.43985 18.6434C3.34571 19.0782 3.50745 19.5279 3.85322 19.7887C4.03908 19.9296 4.25743 20 4.47655 20C4.66485 20 4.8533 19.9478 5.0216 19.8427L10 16.7364L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7293L19.6376 8.73596C19.9576 8.44298 20.0794 7.98041 19.9477 7.55686Z"
										fill="#7653FC"
									/>
									<path
										d="M44.9477 7.55686C44.816 7.13427 44.4568 6.83508 44.0335 6.79511L38.2601 6.24816L35.9784 0.673859C35.81 0.264321 35.4267 0 35 0C34.5734 0 34.1899 0.264321 34.0225 0.673859L31.7408 6.24816L25.9665 6.79511C25.5432 6.83587 25.1848 7.13507 25.0524 7.55686C24.9207 7.97946 25.0423 8.44298 25.3624 8.73596L29.7266 12.7293L28.4399 18.6434C28.3457 19.0782 28.5075 19.5279 28.8532 19.7887C29.0391 19.9296 29.2574 20 29.4766 20C29.6648 20 29.8533 19.9478 30.0216 19.8427L35 16.7364L39.9775 19.8427C40.3427 20.0704 40.8018 20.0495 41.1468 19.7887C41.4926 19.5279 41.6543 19.0782 41.5602 18.6434L40.2734 12.7293L44.6376 8.73596C44.9576 8.44298 45.0794 7.98041 44.9477 7.55686Z"
										fill="#7653FC"
									/>
									<path
										d="M69.9477 7.55686C69.816 7.13427 69.4568 6.83508 69.0335 6.79511L63.2601 6.24816L60.9784 0.673859C60.81 0.264321 60.4267 0 60 0C59.5734 0 59.1899 0.264321 59.0225 0.673859L56.7408 6.24816L50.9665 6.79511C50.5432 6.83587 50.1848 7.13507 50.0524 7.55686C49.9207 7.97946 50.0423 8.44298 50.3624 8.73596L54.7266 12.7293L53.4399 18.6434C53.3457 19.0782 53.5075 19.5279 53.8532 19.7887C54.0391 19.9296 54.2574 20 54.4766 20C54.6648 20 54.8533 19.9478 55.0216 19.8427L60 16.7364L64.9775 19.8427C65.3427 20.0704 65.8018 20.0495 66.1468 19.7887C66.4926 19.5279 66.6543 19.0782 66.5602 18.6434L65.2734 12.7293L69.6376 8.73596C69.9576 8.44298 70.0794 7.98041 69.9477 7.55686Z"
										fill="#7653FC"
									/>
									<path
										d="M94.9477 7.55686C94.816 7.13427 94.4568 6.83508 94.0335 6.79511L88.2601 6.24816L85.9784 0.673859C85.81 0.264321 85.4267 0 85 0C84.5734 0 84.1899 0.264321 84.0225 0.673859L81.7408 6.24816L75.9665 6.79511C75.5432 6.83587 75.1848 7.13507 75.0524 7.55686C74.9207 7.97946 75.0423 8.44298 75.3624 8.73596L79.7266 12.7293L78.4399 18.6434C78.3457 19.0782 78.5075 19.5279 78.8532 19.7887C79.0391 19.9296 79.2574 20 79.4766 20C79.6648 20 79.8533 19.9478 80.0216 19.8427L85 16.7364L89.9775 19.8427C90.3427 20.0704 90.8018 20.0495 91.1468 19.7887C91.4926 19.5279 91.6543 19.0782 91.5602 18.6434L90.2734 12.7293L94.6376 8.73596C94.9576 8.44298 95.0794 7.98041 94.9477 7.55686Z"
										fill="#7653FC"
									/>
									<path
										d="M119.948 7.55686C119.816 7.13427 119.457 6.83508 119.034 6.79511L113.26 6.24816L110.978 0.673859C110.81 0.264321 110.427 0 110 0C109.573 0 109.19 0.264321 109.023 0.673859L106.741 6.24816L100.967 6.79511C100.543 6.83587 100.185 7.13507 100.052 7.55686C99.9207 7.97946 100.042 8.44298 100.362 8.73596L104.727 12.7293L103.44 18.6434C103.346 19.0782 103.507 19.5279 103.853 19.7887C104.039 19.9296 104.257 20 104.477 20C104.665 20 104.853 19.9478 105.022 19.8427L110 16.7364L114.978 19.8427C115.343 20.0704 115.802 20.0495 116.147 19.7887C116.493 19.5279 116.654 19.0782 116.56 18.6434L115.273 12.7293L119.638 8.73596C119.958 8.44298 120.079 7.98041 119.948 7.55686Z"
										fill="#E2E2E2"
									/>
								</svg>
							</div>
							<span className="rating__count"> 20 отзывов</span>
						</div>
					</div>
				</div>
				<div className="body--course">
					<p>
						Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft
						skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами,
						разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с
						веб-дизайнерами уровня middle.
					</p>
					<div className="body--course__info">
						<div className="body--course__left">
							<div className="body--course__left--block">
								<b>Документ об окончании </b>
								<span>Диплом</span>
							</div>
							<div className="body--course__left--block">
								<b>Сложность</b>
								<span>Начальная</span>
							</div>

							<div className="body--course__left--block">
								<b>Длительность</b>
								<span>5 месяцев</span>
							</div>
						</div>
						<div className="body--course__right">
							<b>Преимущества</b>
							<p>
								Хорошо структурирован курс, быстрый отклик преподователей, качество подачи материала
							</p>
							<b>Недостатки</b>
							<p>Некоторое темы раскрыты не до конца</p>
						</div>
					</div>
					<div className="body--course__links">
						<a className="link" href="/">
							Узнать подробнее
						</a>
						<a className="link link__white" href="/">
							Читать отзывы
							<svg
								width="6"
								height="10"
								viewBox="0 0 6 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84025C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84025L5.7154 5.38614C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"
									fill="#3B434E"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div className="comments">
				<div className="comments-header">
					<div className="comments-header__left">
						<img src={avatar} alt="" />
						<b>Василий Раганов:</b>
						<span>Что вас ждет в этом курсе?</span>
					</div>
					<div className="comments-header__right">
						<span>10 марта 2021</span>
						<div>
							<svg
								width="120"
								height="20"
								viewBox="0 0 120 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M19.9477 7.55686C19.816 7.13427 19.4568 6.83508 19.0335 6.79511L13.2601 6.24816L10.9784 0.673859C10.81 0.264321 10.4267 0 10 0C9.57337 0 9.18991 0.264321 9.02252 0.673859L6.74084 6.24816L0.966519 6.79511C0.543233 6.83587 0.184799 7.13507 0.0523506 7.55686C-0.0793348 7.97946 0.0422796 8.44298 0.362414 8.73596L4.72665 12.7293L3.43985 18.6434C3.34571 19.0782 3.50745 19.5279 3.85322 19.7887C4.03908 19.9296 4.25743 20 4.47655 20C4.66485 20 4.8533 19.9478 5.0216 19.8427L10 16.7364L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7293L19.6376 8.73596C19.9576 8.44298 20.0794 7.98041 19.9477 7.55686Z"
									fill="#7653FC"
								/>
								<path
									d="M44.9477 7.55686C44.816 7.13427 44.4568 6.83508 44.0335 6.79511L38.2601 6.24816L35.9784 0.673859C35.81 0.264321 35.4267 0 35 0C34.5734 0 34.1899 0.264321 34.0225 0.673859L31.7408 6.24816L25.9665 6.79511C25.5432 6.83587 25.1848 7.13507 25.0524 7.55686C24.9207 7.97946 25.0423 8.44298 25.3624 8.73596L29.7266 12.7293L28.4399 18.6434C28.3457 19.0782 28.5075 19.5279 28.8532 19.7887C29.0391 19.9296 29.2574 20 29.4766 20C29.6648 20 29.8533 19.9478 30.0216 19.8427L35 16.7364L39.9775 19.8427C40.3427 20.0704 40.8018 20.0495 41.1468 19.7887C41.4926 19.5279 41.6543 19.0782 41.5602 18.6434L40.2734 12.7293L44.6376 8.73596C44.9576 8.44298 45.0794 7.98041 44.9477 7.55686Z"
									fill="#7653FC"
								/>
								<path
									d="M69.9477 7.55686C69.816 7.13427 69.4568 6.83508 69.0335 6.79511L63.2601 6.24816L60.9784 0.673859C60.81 0.264321 60.4267 0 60 0C59.5734 0 59.1899 0.264321 59.0225 0.673859L56.7408 6.24816L50.9665 6.79511C50.5432 6.83587 50.1848 7.13507 50.0524 7.55686C49.9207 7.97946 50.0423 8.44298 50.3624 8.73596L54.7266 12.7293L53.4399 18.6434C53.3457 19.0782 53.5075 19.5279 53.8532 19.7887C54.0391 19.9296 54.2574 20 54.4766 20C54.6648 20 54.8533 19.9478 55.0216 19.8427L60 16.7364L64.9775 19.8427C65.3427 20.0704 65.8018 20.0495 66.1468 19.7887C66.4926 19.5279 66.6543 19.0782 66.5602 18.6434L65.2734 12.7293L69.6376 8.73596C69.9576 8.44298 70.0794 7.98041 69.9477 7.55686Z"
									fill="#7653FC"
								/>
								<path
									d="M94.9477 7.55686C94.816 7.13427 94.4568 6.83508 94.0335 6.79511L88.2601 6.24816L85.9784 0.673859C85.81 0.264321 85.4267 0 85 0C84.5734 0 84.1899 0.264321 84.0225 0.673859L81.7408 6.24816L75.9665 6.79511C75.5432 6.83587 75.1848 7.13507 75.0524 7.55686C74.9207 7.97946 75.0423 8.44298 75.3624 8.73596L79.7266 12.7293L78.4399 18.6434C78.3457 19.0782 78.5075 19.5279 78.8532 19.7887C79.0391 19.9296 79.2574 20 79.4766 20C79.6648 20 79.8533 19.9478 80.0216 19.8427L85 16.7364L89.9775 19.8427C90.3427 20.0704 90.8018 20.0495 91.1468 19.7887C91.4926 19.5279 91.6543 19.0782 91.5602 18.6434L90.2734 12.7293L94.6376 8.73596C94.9576 8.44298 95.0794 7.98041 94.9477 7.55686Z"
									fill="#7653FC"
								/>
								<path
									d="M119.948 7.55686C119.816 7.13427 119.457 6.83508 119.034 6.79511L113.26 6.24816L110.978 0.673859C110.81 0.264321 110.427 0 110 0C109.573 0 109.19 0.264321 109.023 0.673859L106.741 6.24816L100.967 6.79511C100.543 6.83587 100.185 7.13507 100.052 7.55686C99.9207 7.97946 100.042 8.44298 100.362 8.73596L104.727 12.7293L103.44 18.6434C103.346 19.0782 103.507 19.5279 103.853 19.7887C104.039 19.9296 104.257 20 104.477 20C104.665 20 104.853 19.9478 105.022 19.8427L110 16.7364L114.978 19.8427C115.343 20.0704 115.802 20.0495 116.147 19.7887C116.493 19.5279 116.654 19.0782 116.56 18.6434L115.273 12.7293L119.638 8.73596C119.958 8.44298 120.079 7.98041 119.948 7.55686Z"
									fill="#E2E2E2"
								/>
							</svg>
						</div>
					</div>
				</div>
				<p>
					Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым
					сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого
					популярного в программировании. Выбор мой пал на эту профессию еще и потому, что
					Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по
					многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей
					сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains.
					Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт
					коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в
					трудоустройстве!
				</p>
			</div>
			<div className="form"></div>
		</div>
	)
}

export default Course
