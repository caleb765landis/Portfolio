import css from "../../../styles/components/layouts/projects/AllProjectsGrid.module.css";
import * as IconImports from "/utils/iconImports";
import Badge from "../../common/Badge";

export default function AllProjectsGrid({repos}) {
	return (
		<div className="flex flex-col items-center font-semibold">
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
							languageIcon,
							watchers,
							homepage,
							pushed_at,
						},
						index
					) => {
						const date = new Date(pushed_at).toDateString();
						return (
							// <div className="border-b-2 border-white px-3 py-6">
							<div className="px-3 py-6">
								<div key={index} className="">
									<div className="pb-2">
										<span className="flex justify-between">
											<a
												href={html_url}
												rel="noreferrer"
												target="_blank"
												className="text-2xl font-bold hover:underline"
											>
												{name}
												<IconImports.FontAwesomeIcon
													icon={IconImports.faArrowUpRightFromSquare}
													size="xs"
													className="pl-2"
												/>
											</a>
											{/* <p className="text-xl font-extralight">{homepage}</p> */}
											<p className="text-xl font-extralight">{date}</p>
										</span>
										{/* <p className="text-md font-extralight">{date}</p> */}
										<p className="text-md font-extralight">{homepage}</p>
									</div>

									<div className="pb-2 max-w-lg">
										<p className="">{description}</p>
									</div>

									<TopicsList topics={topics} />

									<span className="flex flex-row text-xl font-bold">
										<p className="pr-2 flex flex-row">
											<i className={`${languageIcon} pr-2 flex items-center`} />
											<p>{language}</p>
										</p>
										<p className="px-2">
											<IconImports.FontAwesomeIcon
												icon={IconImports.faStar}
												size="sm"
												className="pr-2"
											/>
											{watchers}
										</p>
										<p className="px-2">
											<IconImports.FontAwesomeIcon
												icon={IconImports.faCodeBranch}
												size="sm"
												className="pr-2"
											/>
											{forks_count}
										</p>
									</span>
								</div>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
}

function TopicsList({topics}) {
	return (
		<div className="flex flex-row flex-wrap max-w-2xl mb-2">
			{topics.map((e, index) => {
				return (
					<span
						key={index}
						className="bg-white text-accent rounded-xl flex items-center place-content-center text-xs font-semibold mr-2 my-2 px-3 py-1"
					>
						<IconImports.FontAwesomeIcon
							icon={IconImports.faGithub}
							size="sm"
							className="pr-2"
						/>
						{e}
					</span>
				);
			})}
		</div>
	);
}
