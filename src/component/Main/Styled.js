import styled from "styled-components";

export const BoxIconStyled = styled.div`
	width: 120px;
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	background-color: #fff;
	border-radius: 5px;
	flex-direction: column;

	:hover {
		background-color: #40a9ff;
	}

	.box-icon-svg {
		height: 60%;
		display: flex;
		align-items: center;
	}

	.box-icon-name {
		height: 40%;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const BoxContentModalStyled = styled.div`
	cursor: pointer;

	.svg-view {
		width: 320px;
		height: 320px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.svg-view svg {
		height: 100px;
	}

	.copy-icon-code {
		height: 320px;
		font-size: 20px;
		padding: 16px;
		margin: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		// background-color: #daeeff;
	}
	.copy-icon-code .icon-code {
		color: blue;
	}

	.ant-tabs-tab svg {
		vertical-align: -15%;
	}
	.ant-tabs-content {
		font-size: 16px;
		padding: 12px;
	}
`;

export const SearchStyleCheckBoxStyled = styled.div`
	user-select: none;
	text-align: center;
	padding-bottom: 30px;
	.ant-checkbox + span {
		font-size: 18px;
		margin-top: 2px;
	}

	.ant-checkbox-wrapper.ant-checkbox-group-item {
		padding: 12px;
	}
`;
