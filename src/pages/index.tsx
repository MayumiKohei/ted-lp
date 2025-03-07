import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "microcms-js-sdk";
import styles from "@/styles/index.module.scss";
import cn from "classnames";

// microCMSクライアントの作成
const client = createClient({
	serviceDomain: "ted-lp", // microCMSのドメイン
	apiKey: process.env.MICROCMS_API_KEY!, // 環境変数を参照
});

export const getStaticProps: GetStaticProps = async () => {
	const imageData = await client.get({ endpoint: "image" });

	return {
		props: {
			images: imageData.contents[0], // contents配列の最初の要素を渡す
		},
	};
};

const LandingPage = ({
	images,
}: {
	images: Record<string, { url: string; height: number; width: number }>;
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.container__top}>
				<Image
					src={images.image_1.url}
					alt="画像1"
					width={images.image_1.width}
					height={images.image_1.height}
					className={styles.container__top__img}
				/>
				<div className={styles.container__top__content}>
					<Link
						href="#targetSection"
						className={styles.container__top__content__link}
					>
						<Image
							src="/images/プランボタン.svg"
							alt="プランボタン"
							width={254}
							height={42}
							className={
								styles.container__top__content__link__img
							}
						/>
					</Link>
				</div>
			</div>

			<div className={styles.container__imgStack}>
				<Image
					src={images.image_2.url}
					alt="画像2"
					width={images.image_2.width}
					height={images.image_2.height}
					className={styles.container__imgStack__1}
				/>
				<Image
					src="/images/bg-image1.png"
					alt="長方形背景"
					width={394}
					height={834}
					className={styles.container__imgStack__2}
				/>
				<Image
					src={images.image_3.url}
					alt="画像3"
					width={images.image_3.width}
					height={images.image_3.height}
					className={styles.container__imgStack__3}
				/>
			</div>

			<div className={styles.container__oneSelf}>
				<Image
					src={images.image_4.url}
					alt="画像4"
					width={images.image_4.width}
					height={images.image_4.height}
					className={styles.container__oneSelf__img}
				/>
				<Link href="https://www.instagram.com/ted_paolo?igsh=ZDl3cHBhZzVrcnN3">
					<Image
						src="/images/ig_icon.png"
						alt="Instagram"
						width={77}
						height={77}
						className={styles.container__oneSelf__icon}
					/>
				</Link>
			</div>

			<div className={styles.container__reviews}>
				<Image
					src={images.image_5.url}
					alt="画像5"
					width={images.image_5.width}
					height={images.image_5.height}
					className={styles.container__reviews__img}
				/>
			</div>

			<div className={styles.container__plan} id="targetSection">
				<div className={styles.container__plan__content}>
					<Image
						src={images.image_6.url}
						alt="画像6"
						width={images.image_6.width}
						height={images.image_6.height}
						className={styles.container__plan__content__img}
					/>
					<div className={styles.container__plan__content__btn}>
						<Link href="https://lin.ee/jx98HYF">
							<Image
								src="/images/ラインボタン.svg"
								alt="公式ラインボタン"
								width={340}
								height={52}
								className={
									styles.container__plan__content__btn__img
								}
							/>
						</Link>
					</div>
				</div>
			</div>

			<div className={styles.container__plan2}>
				<div className={styles.container__plan2__content}>
					<Image
						src={images.image_7.url}
						alt="画像7"
						width={images.image_7.width}
						height={images.image_7.height}
						className={styles.container__plan2__content__img}
					/>
					<div className={styles.container__plan2__content__btn}>
						<Link href="https://lin.ee/jx98HYF">
							<Image
								src="/images/ラインボタン.svg"
								alt="公式ラインボタン"
								width={340}
								height={52}
								className={
									styles.container__plan2__content__btn__img
								}
							/>
						</Link>
					</div>
				</div>
			</div>

			<div className={styles.container__plan3}>
				<div className={styles.container__plan3__content}>
					<Image
						src={images.image_8.url}
						alt="画像8"
						width={images.image_8.width}
						height={images.image_8.height}
						className={styles.container__plan3__content__img}
					/>
					<div className={styles.container__plan3__content__btn}>
						<Link href="https://lin.ee/jx98HYF">
							<Image
								src="/images/ラインボタン.svg"
								alt="公式ラインボタン"
								width={340}
								height={52}
								className={
									styles.container__plan3__content__btn__img
								}
							/>
						</Link>
					</div>
				</div>
			</div>

			<div className={styles.container__shooting}>
				<Image
					src="/images/ラインボタン.svg"
					alt="公式ラインボタン"
					width={340}
					height={52}
					className={styles.container__shooting__line__mini}
				/>
				<Image
					src="/images/撮影の流れ.png"
					alt="撮影の流れ"
					height={3300}
					width={1300}
					className={styles.container__shooting__img}
				/>
				<Image
					src="/images/ラインボタン.svg"
					alt="公式ラインボタン"
					width={340}
					height={52}
					className={styles.container__shooting__line__img}
				/>
			</div>

			<div>
				<Image
					src="/images/ロケーション.png"
					alt="ロケーション"
					width={430}
					height={80}
					className={styles.container__location__img}
				/>
				<Image
					src={images.image_9.url}
					alt="画像9"
					width={images.image_9.width}
					height={images.image_9.height}
					className={cn(styles.mb5, styles.locaimg)}
				/>
				<Image
					src={images.image_10.url}
					alt="画像10"
					width={images.image_10.width}
					height={images.image_10.height}
					className={cn(styles.mb5, styles.locaimg)}
				/>
				<Image
					src={images.image_11.url}
					alt="画像11"
					width={images.image_11.width}
					height={images.image_11.height}
					className={cn(styles.mb5, styles.locaimg)}
				/>
				<Image
					src={images.image_12.url}
					alt="画像12"
					width={images.image_12.width}
					height={images.image_12.height}
					className={cn(styles.mb5, styles.locaimg)}
				/>
				<Image
					src={images.image_13.url}
					alt="画像13"
					width={images.image_13.width}
					height={images.image_13.height}
					className={cn(styles.mb5, styles.locaimg)}
				/>
				<Image
					src={images.image_14.url}
					alt="画像14"
					width={images.image_14.width}
					height={images.image_14.height}
					className={cn(styles.mb5, styles.locaimg)}
				/>
				<Image
					src={images.image_15.url}
					alt="画像15"
					width={images.image_15.width}
					height={images.image_15.height}
					className={cn(styles.mb5, styles.locaimg)}
				/>
			</div>

			<div className={styles.container__last}>
				<Image
					src="/images/フッター.png"
					alt="フッター"
					width={430}
					height={753}
					className={styles.container__last__img}
				/>
			</div>
		</div>
	);
};

export default LandingPage;
