import React from "react";
import db from "../../database/database";
import { Search } from "../../service/service";
import Header from "./Header";
import { Col, Modal, Row, Tabs, Tooltip } from "antd";
import { BoxContentModalStyled, BoxIconStyled } from "./Styled";
const { TabPane } = Tabs;

const htmlIcon = db.brand["html5-brand"];
const reactIcon = db.brand["react-brand"];

export default function Main() {
	const [icons, setIcons] = React.useState([]);
	const [icon, setIcon] = React.useState([]);
	const [search, setSearch] = React.useState("");
	const [styles, setStyles] = React.useState(["solid", "brands"]);
	React.useEffect(() => {
		console.log(styles);
		Search(search, styles, (response) => {
			let hits = response.results[0].hits;
			console.log(hits.map((x) => x.categories));
			let icons = hits.map((hit) => {
				let name = hit.name;
				if (hit.style === "solid") {
					let solid = db.solid[name + "-solid"];
					return [name + "-solid", solid?.at(0), solid?.at(1)];
				} else if (hit.style === "regular") {
					let regular = db.regular[name + "-regular"];
					return [name + "-regular", regular?.at(0), regular?.at(1)];
				} else if (hit.style === "light") {
					let light = db.light[name + "-light"];
					return [name + "-light", light?.at(0), light?.at(1)];
				} else if (hit.style === "thin") {
					let thin = db.thin[name + "-thin"];
					return [name + "-thin", thin?.at(0), thin?.at(1)];
				} else if (hit.style === "duotone") {
					let duotone = db.duotone[name + "-duotone"];
					return [
						name + "-duotone",
						duotone?.at(0),
						duotone?.at(1),
						duotone?.at(2),
					];
				} else if (hit.style === "brands") {
					let brand = db.brand[name + "-brand"];
					return [name + "-brand", brand?.at(0), brand?.at(1)];
				}
				return [];
			});
			setIcons(icons);
		});
	}, [search, styles]);

	const handleOk = () => {
		setModalShow(false);
	};

	const handleCancel = () => {
		setModalShow(false);
	};

	const handleBoxItemClick = (icon) => {
		setIcon(icon);
		setModalShow(true);
	};

	const handleCopyHtmlCode = (value) => {
		navigator.clipboard.writeText(value);
		setToolTip("Copied");
		setTimeout(() => setToolTip("Copy html code"), 2000);
	};

	const [modalShow, setModalShow] = React.useState(false);
	const [toolTip, setToolTip] = React.useState("Copy html code");
	return (
		<>
			{icon?.length > 0 && (
				<Modal
					title={icon?.at(0)}
					visible={modalShow}
					onOk={handleOk}
					onCancel={handleCancel}
					width="80%"
					style={{
						maxWidth: "900px",
					}}
				>
					<BoxContentModalStyled>
						<Row>
							<Col>
								<div className="svg-view">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height={32}
										viewBox={`0 0 ${icon?.at(1)} 512`}
									>
										<path
											fill="currentColor"
											d={icon?.at(2)}
										></path>
									</svg>
								</div>
							</Col>
							<Col span={12}>
								<div className="copy-icon-code">
									<Tabs defaultActiveKey="1">
										<TabPane
											tab={
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														height={20}
														viewBox={`0 0 ${htmlIcon[0]} 512`}
													>
														<path
															fill="currentColor"
															d={htmlIcon[1]}
														></path>
													</svg>{" "}
													Html
												</span>
											}
											key="1"
											className="copy-html-code"
										>
											<Tooltip
												title={toolTip}
												onClick={() =>
													handleCopyHtmlCode(
														`<n class="n-icon ${icon[0]}"></n>`
													)
												}
											>
												{`<n class="`}
												<span className="icon-code">
													n-icon {icon[0]}
												</span>
												{`"></n>`}
											</Tooltip>
										</TabPane>
										<TabPane
											tab={
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														height={20}
														viewBox={`0 0 ${reactIcon[0]} 512`}
													>
														<path
															fill="currentColor"
															d={reactIcon[1]}
														></path>
													</svg>{" "}
													React
												</span>
											}
											key="2"
										>
											Coming soon
										</TabPane>
									</Tabs>
								</div>
							</Col>
						</Row>
					</BoxContentModalStyled>
				</Modal>
			)}

			<Header setSearch={setSearch} setStyles={setStyles}></Header>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					backgroundColor: "#f0f1f3",
				}}
			>
				{icons.map((icon, index) => {
					if (
						icon?.length > 2 &&
						icon.every((x) => x !== undefined)
					) {
						return (
							<BoxIconStyled
								key={index}
								onClick={() => handleBoxItemClick(icon)}
							>
								<div className="box-icon-svg">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height={32}
										viewBox={`0 0 ${icon?.at(1)} 512`}
									>
										{icon?.length > 3 ? (
											<>
												<path
													className="secondary"
													fill="currentColor"
													d={icon?.at(2)}
												></path>
												<path
													fill="currentColor"
													d={icon?.at(3)}
												></path>
											</>
										) : (
											<path
												fill="currentColor"
												d={icon?.at(2)}
											></path>
										)}
									</svg>
								</div>

								<div className="box-icon-name">
									{icon?.at(0)}
								</div>
							</BoxIconStyled>
						);
					}
					return <div key={index}></div>;
				})}
			</div>
		</>
	);
}
