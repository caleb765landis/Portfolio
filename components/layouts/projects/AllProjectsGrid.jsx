import css from "../../../styles/components/layouts/projects/AllProjectsGrid.module.css";

export default function AllProjectsGrid({repos}) {
	return (
		<div className="flex flex-col items-center text-center font-semibold">
			<div className="">
				{repos.map(
					(
						{
							name,
							description,
							topics,
							forks_count,
							html_url,
							language,
							watchers,
							homepage,
							pushed_at,
						},
						index
					) => {
						const date = new Date(pushed_at).toDateString();
						return (
							<div className="card">
								<article key={index} className="">
									<span className={css.header}>
										<a href={html_url} rel="noreferrer" target="_blank">
											{name}
											{/* <Icon icon={["fad", "arrow-up-right-from-square"]} /> */}
										</a>
										<p className="">{homepage}</p>
									</span>
									<span className="">
										<p className="">{description}</p>
									</span>
									<span className="">
										<p>
											{/* <i
												className={`devicon-${language.toLowerCase()}-plain colored`}
											/> */}
											{language}
										</p>
										{/* <p>
											<Icon icon={["fad", "star"]} /> {watchers}
										</p>
										<p>
											<Icon icon={["fad", "code-branch"]} /> {forks_count}
										</p> */}
										<p className="">{date}</p>
									</span>
									<span className="">
										{topics.map((e, index) => {
											return (
												<span key={index} className="">
													{/* <i class="devicon-github-plain"></i> */} {e}
												</span>
											);
										})}
									</span>
								</article>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
}
