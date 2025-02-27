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
	const priceData = await client.get({ endpoint: "price" });

	return {
		props: {
			images: imageData.contents[0], // contents配列の最初の要素を渡す
			prices: priceData.contents[0],
		},
	};
};

const LandingPage = ({
	images,
	prices,
}: {
	images: Record<string, { url: string; height: number; width: number }>;
	prices: Record<string, string>;
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
					<p>
						一生に一度の特別な瞬間を、
						<br />
						宮古島の美しい風景とともに・・・
					</p>
					<span>＼お手軽プラン〜宮古島満喫豪華プランもご用意／</span>
					<br />
					<Link
						href="#targetSection"
						className={styles.container__top__content__link}
					>
						撮影プランを見る
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
				<h2 className={cn(styles.h2, styles.c70)}>フォトグラファー</h2>
				<p className={styles.c70}>**PHOTOGRAPHER**</p>
				<div className={styles.container__oneSelf__imgContainer}>
					<Image
						src={images.image_4.url}
						alt="画像4"
						width={images.image_4.width}
						height={images.image_4.height}
						className={styles.container__oneSelf__imgContainer__img}
					/>
					<Link href="https://www.instagram.com/ted_paolo?igsh=ZDl3cHBhZzVrcnN3">
						<Image
							src="/images/ig_icon.png"
							alt="Instagram"
							width={77}
							height={77}
							className={
								styles.container__oneSelf__imgContainer__icon
							}
						/>
					</Link>
				</div>

				<div className={styles.container__oneSelf__content}>
					<h2 className={cn(styles.h2, styles.c39)}>テッド</h2>
					<h3 className={cn(styles.h3, styles.c39)}>
						カメラマン歴10年
					</h3>
					<h3 className={cn(styles.s14, styles.c39)}>
						特別な一日を美しい形で記録し、未来に渡る宝物に
					</h3>
					<span className={styles.c70}>
						1988年フィリピン生まれで、26歳で日本国籍を取得しました。
						<br />
						その後、家族写真を通じて写真の魅力に目覚め、ライブイベントフォトグラファーとしての道を歩み始めました。
						<br />
						東京、仙台、福島を中心に活動し、2019年に独立。2023年には沖縄本島へ移住し、ウェディング専任のカメラマンとしての経験を重ねました。2025年に再び独立し、2000組以上のカップルの特別な瞬間を撮影してきました。
						<br />
						私の写真は、お二人の大切な時間をありのままに残すことを大切にしています。
					</span>
				</div>
			</div>

			<div className={styles.container__reviews}>
				<h2 className={cn(styles.h2, styles.c70)}>
					お客様からの口コミ
				</h2>
				<p className={cn(styles.c70, styles.trj10, styles.mb40)}>
					**CUSTOMER REVIEWS**
				</p>
				<div className={styles.container__reviews__content}>
					<div className={styles.container__reviews__content__hd}>
						<Image
							src="/images/bride.png"
							alt="新婦"
							width={44}
							height={44}
							className={cn(styles.bgw, styles.circle)}
						/>
						<p className={styles.c4d}>
							28歳/新婦
							<br />
							<span className={styles.c4d}>宮古島満喫プラン</span>
						</p>
						<Image
							src="/images/star5.0.png"
							alt="星5.0"
							width={125}
							height={24}
							className={
								styles.container__reviews__content__hd__star
							}
						/>
					</div>
					<p className={styles.container__reviews__content__title}>
						とにかく楽しく撮影できました！
					</p>
					<p className={styles.container__reviews__content__main}>
						宮古島での旅行中、海のロケーションでウエディングフォトを撮影しました。口コミが高評価で、料金も納得できる内容だったので選びました。ドローン撮影やグリーンの撮影など、多様な撮影場所と方法があり、思い出に残る写真を残せて大満足です。TEDさんが親切に対応してくれたおかげで、期待以上の仕上がりとなりました。
					</p>
				</div>
				<div className={styles.container__reviews__content}>
					<div className={styles.container__reviews__content__hd}>
						<Image
							src="/images/bride.png"
							alt="新婦"
							width={44}
							height={44}
							className={cn(styles.bgw, styles.circle)}
						/>
						<p className={styles.c4d}>
							26歳/新婦
							<br />
							<span>ゴールドプラン</span>
						</p>
						<Image
							src="/images/star5.0.png"
							alt="星5.0"
							width={135}
							height={21}
							className={
								styles.container__reviews__content__hd__star
							}
						/>
					</div>
					<p className={styles.container__reviews__content__title}>
						北海道から行った甲斐がありました！！
					</p>
					<p className={styles.container__reviews__content__main}>
						今回、沖縄の美しい海での撮影を希望し、評価の高いTEDさんにお願いしました！初めての宮古島訪問も魅力的で、離島を選べるオプションが大きなプラスでした！現地での撮影は期待以上の体験となり、プロフェッショナルなサービスに大変満足しています。特別な瞬間を忘れられない思い出として残せました！！
					</p>
				</div>
				<div className={styles.container__reviews__content}>
					<div className={styles.container__reviews__content__hd}>
						<Image
							src="/images/groom.png"
							alt="新郎"
							width={44}
							height={44}
							className={cn(styles.bgw, styles.circle)}
						/>
						<p className={styles.c4d}>
							33歳/新郎
							<br />
							<span>宮古島満喫プラン</span>
						</p>
						<Image
							src="/images/star4.8.png"
							alt="星4.8"
							width={135}
							height={21}
							className={
								styles.container__reviews__content__hd__star
							}
						/>
					</div>
					<p className={styles.container__reviews__content__title}>
						宮古ブルーの最高のロケーションで！サンセットも
						オススメ✧‧˚
					</p>
					<p className={styles.container__reviews__content__main}>
						宮古ブルーの絶景で撮影ができ、大満足です！特にサンセットが素晴らしく、絶対に外せないビーチとサンセットの撮影に加えて、おすすめスポットも楽しめる贅沢なプランが魅力的でした。口コミ評価が高く、実際の写真も期待通り美しく、選んで本当に良かったです！
					</p>
				</div>
				<div className={styles.container__reviews__content}>
					<div className={styles.container__reviews__content__hd}>
						<Image
							src="/images/bride.png"
							alt="新婦"
							width={44}
							height={44}
							className={cn(styles.bgw, styles.circle)}
						/>
						<p className={styles.c4d}>
							29歳/新婦
							<br />
							<span>ゴールドプラン</span>
						</p>
						<Image
							src="/images/star4.5.png"
							alt="星4.5"
							width={135}
							height={21}
							className={
								styles.container__reviews__content__hd__star
							}
						/>
					</div>
					<p className={styles.container__reviews__content__title}>
						宮古ブルーで叶えた、贅沢なサンセット撮影体験
					</p>
					<p className={styles.container__reviews__content__main}>
						宮古ブルーの美しいロケーションで撮影しました。そして、何よりも圧巻だったのがサンセット！ビーチと夕日の組み合わせは絶対に外せません。さらに、プロのおすすめスポットが追加されたゴールドプランを選びました！口コミの評判通り、仕上がった写真はどれも素晴らしく、素敵な思い出になりました♪
					</p>
				</div>
			</div>

			<div className={styles.container__plan} id="targetSection">
				<div className={styles.container__plan__section}>
					<div className={styles.container__plan__section__hd}>
						<div
							className={
								styles.container__plan__section__hd__title
							}
						>
							<h2 className={cn(styles.h2, styles.c70)}>
								宮古島撮影プラン①
							</h2>
							<p className={cn(styles.c70, styles.trj10)}>
								**Miyako Island Photography Plan**
							</p>
						</div>
						<Image
							src="/images/yashinoki.png"
							alt="ヤシの木"
							width={411}
							height={410}
							className={styles.container__plan__section__hd__img}
						/>
					</div>
					<div className={styles.container__plan__section__main}>
						<div
							className={
								styles.container__plan__section__main__content
							}
						>
							<Image
								src={images.image_5.url}
								alt="画像5"
								width={images.image_5.width}
								height={images.image_5.height}
								className={
									styles.container__plan__section__main__content__img
								}
							/>
							<span
								className={
									styles.container__plan__section__main__content__pop
								}
							>
								期間限定
							</span>
							<div
								className={cn(
									styles.container__plan__section__main__content__info,
									styles.s13
								)}
							>
								<Image
									src="/images/flg_icon.png"
									alt="フラッグアイコン"
									width={14}
									height={14}
								/>
								<p>ロケーション２箇所</p>
								<Image
									src="/images/img_icon.png"
									alt="写真アイコン"
									width={14}
									height={14}
								/>
								<p>データ150カット</p>
								<Image
									src="/images/clock_icon.png"
									alt="時計アイコン"
									width={14}
									height={14}
								/>
								<p>2時間</p>
							</div>
						</div>
					</div>
					<p
						className={cn(
							styles.container__plan__section__title,
							styles.c65
						)}
					>
						【ベーシック】＼春限定！／宮古島の絶景で150カット撮影★
						<br />
						２つのロケーションでおふたりの輝きを…
					</p>
					<div className={styles.container__plan__section__price}>
						<p
							className={cn(
								styles.container__plan__section__price__name,
								styles.c70
							)}
						>
							ベーシックプラン
						</p>
						<span>
							<span className={styles.yen}>¥</span>
							{prices.price_1}
						</span>
						<p
							className={cn(
								styles.container__plan__section__price__tax,
								styles.c70
							)}
						>
							(税込)
						</p>
					</div>
					<Image
						src="/images/plan1.png"
						alt="プラン１"
						width={367}
						height={428}
						className={styles.container__plan__section__category}
					/>
					<p
						className={cn(
							styles.container__plan__section__p1,
							styles.c65
						)}
					>
						＼ドレス・タキシード衣装レンタルご紹介できます／
					</p>
					<p
						className={cn(
							styles.container__plan__section__p2,
							styles.c65
						)}
					>
						小物（ヘアアクセ、イヤリング等）、ブーケレンタル可
					</p>
					<Link href="https://lin.ee/jx98HYF" className={styles.line}>
						公式ラインで無料相談をする
					</Link>
					<p className={styles.zi}> </p>
				</div>

				<div className={styles.container__plan__section2}>
					<div className={styles.container__plan__section__hd}>
						<div
							className={
								styles.container__plan__section__hd__title
							}
						>
							<h2 className={cn(styles.h2, styles.c70)}>
								宮古島撮影プラン②
							</h2>
							<p className={cn(styles.c70, styles.trj10)}>
								**Miyako Island Photography Plan**
							</p>
						</div>
						<Image
							src="/images/yashinoki.png"
							alt="ヤシの木"
							width={411}
							height={410}
							className={styles.container__plan__section__hd__img}
						/>
					</div>
					<div className={styles.container__plan__section__main}>
						<div
							className={
								styles.container__plan__section__main__content
							}
						>
							<Image
								src={images.image_6.url}
								alt="画像6"
								width={images.image_6.width}
								height={images.image_6.height}
								className={
									styles.container__plan__section__main__content__img
								}
							/>
							<span
								className={
									styles.container__plan__section__main__content__pop
								}
							>
								大人気プラン
							</span>
							<div
								className={cn(
									styles.container__plan__section__main__content__info,
									styles.s13
								)}
							>
								<Image
									src="/images/flg_icon.png"
									alt="フラッグアイコン"
									width={14}
									height={14}
								/>
								<p>ロケーション3〜4箇所</p>
								<Image
									src="/images/img_icon.png"
									alt="写真アイコン"
									width={14}
									height={14}
								/>
								<p>データ200カット</p>
								<Image
									src="/images/clock_icon.png"
									alt="時計アイコン"
									width={14}
									height={14}
								/>
								<p>4時間</p>
							</div>
						</div>
					</div>
					<p
						className={cn(
							styles.container__plan__section__title,
							styles.c65
						)}
					>
						【ゴールド】★３〜４ロケーションでおふたりの特別な瞬間を★
						<br />
						２００カット＆インスタ用に選べる映像で思い出を大切に
					</p>
					<div className={styles.container__plan__section__price}>
						<p
							className={cn(
								styles.container__plan__section__price__name,
								styles.c70
							)}
						>
							ゴールドプラン
						</p>
						<span>
							<span className={styles.yen}>¥</span>
							{prices.price_2}
						</span>
						<p
							className={cn(
								styles.container__plan__section__price__tax,
								styles.c70
							)}
						>
							(税込)
						</p>
					</div>
					<Image
						src="/images/plan2.png"
						alt="プラン2"
						width={367}
						height={428}
						className={styles.container__plan__section__category}
					/>
					<p className={styles.container__plan__section__p}>
						※一眼レフムービーかドローンフォトをお選びいただけます
					</p>
					<p
						className={cn(
							styles.container__plan__section__p1,
							styles.c65
						)}
					>
						＼ドレス・タキシード衣装レンタルご紹介できます／
					</p>
					<p
						className={cn(
							styles.container__plan__section__p2,
							styles.c65
						)}
					>
						小物（ヘアアクセ、イヤリング等）、ブーケレンタル可
					</p>
					<Link href="https://lin.ee/jx98HYF" className={styles.line}>
						公式ラインで無料相談をする
					</Link>
				</div>

				<div className={styles.container__plan__section3}>
					<div className={styles.container__plan__section__hd}>
						<div
							className={
								styles.container__plan__section__hd__title
							}
						>
							<h2 className={cn(styles.h2, styles.c70)}>
								宮古島撮影プラン③
							</h2>
							<p className={cn(styles.c70, styles.trj10)}>
								**Miyako Island Photography Plan**
							</p>
						</div>
						<Image
							src="/images/yashinoki.png"
							alt="ヤシの木"
							width={411}
							height={410}
							className={styles.container__plan__section__hd__img}
						/>
					</div>
					<div className={styles.container__plan__section__main}>
						<div
							className={
								styles.container__plan__section__main__content
							}
						>
							<Image
								src={images.image_7.url}
								alt="画像7"
								width={images.image_7.width}
								height={images.image_7.height}
								className={
									styles.container__plan__section__main__content__img
								}
							/>
							<span
								className={
									styles.container__plan__section__main__content__pop
								}
							>
								贅沢プラン
							</span>
							<div
								className={cn(
									styles.container__plan__section__main__content__info__last,
									styles.s13
								)}
							>
								<Image
									src="/images/flg_icon.png"
									alt="フラッグアイコン"
									width={14}
									height={14}
								/>
								<p>ロケーション6箇所</p>
								<Image
									src="/images/img_icon.png"
									alt="写真アイコン"
									width={14}
									height={14}
								/>
								<p>データ300カット</p>
								<Image
									src="/images/clock_icon.png"
									alt="時計アイコン"
									width={14}
									height={14}
								/>
								<p>6時間</p>
							</div>
						</div>
					</div>
					<p
						className={cn(
							styles.container__plan__section__title,
							styles.c65
						)}
					>
						【宮古満喫】★5〜6箇所を巡る豪華撮影★300カットと映画の
						<br />
						ワンシーンのような動画付きで宮古島を存分に楽しむ思い出を
					</p>
					<div className={styles.container__plan__section__price}>
						<p
							className={cn(
								styles.container__plan__section__price__name,
								styles.c70
							)}
						>
							宮古島満喫プラン
						</p>
						<span>
							<span className={styles.yen}>¥</span>
							{prices.price_3}
						</span>
						<p
							className={cn(
								styles.container__plan__section__price__tax,
								styles.c70
							)}
						>
							(税込)
						</p>
					</div>
					<Image
						src="/images/plan2.png"
						alt="プラン3"
						width={367}
						height={428}
						className={styles.container__plan__section__category}
					/>
					<p className={styles.container__plan__section__p}>
						※一眼レフ/ドローンムービー３０〜９０秒
					</p>
					<p
						className={cn(
							styles.container__plan__section__p1,
							styles.c65
						)}
					>
						＼ドレス・タキシード衣装レンタルご紹介できます／
					</p>
					<p
						className={cn(
							styles.container__plan__section__p2,
							styles.c65
						)}
					>
						小物（ヘアアクセ、イヤリング等）、ブーケレンタル可
					</p>
					<Link href="https://lin.ee/jx98HYF" className={styles.line}>
						公式ラインで無料相談をする
					</Link>
				</div>

				<div className={styles.container__shooting}>
					<h2 className={cn(styles.h2, styles.c70)}>
						撮影までの流れ
					</h2>
					<p className={cn(styles.c70, styles.trj10)}>
						**Miyako Island Photography Plan**
					</p>

					<div className={styles.container__shooting__section}>
						<div
							className={styles.container__shooting__section__hd}
						>
							<Image
								src="/images/one.png"
								alt="1"
								width={44}
								height={44}
							/>
							<h2 className={cn(styles.h2, styles.c70)}>
								公式ラインお友達登録
							</h2>
						</div>
						<div
							className={
								styles.container__shooting__section__main
							}
						>
							<p className={cn(styles.s12, styles.c70)}>
								◇お問い合わせ
								<br />
								公式LINEにて撮影日の空き状況などお気軽にお問い合わせくださいませ。
							</p>
							<Link
								href="https://lin.ee/jx98HYF"
								className={styles.line_s}
							>
								公式ラインで無料相談をする
							</Link>
						</div>
					</div>
					<div className={styles.container__shooting__section}>
						<div
							className={styles.container__shooting__section__hd}
						>
							<Image
								src="/images/two.png"
								alt="2"
								width={44}
								height={44}
							/>
							<h2 className={cn(styles.h2, styles.c70)}>
								事前のお打ち合わせ
							</h2>
						</div>
						<div
							className={
								styles.container__shooting__section__main
							}
						>
							<p className={cn(styles.s12, styles.c70)}>
								遠方にて対面でのお打ち合わせが難しい場合は、オンラインでのお打ち合わせをさせていただきます。
							</p>
						</div>
					</div>
					<div className={styles.container__shooting__section}>
						<div
							className={styles.container__shooting__section__hd}
						>
							<Image
								src="/images/three.png"
								alt="3"
								width={44}
								height={44}
							/>
							<h2 className={cn(styles.h2, styles.c70)}>
								お見積もり
							</h2>
						</div>
						<div
							className={
								styles.container__shooting__section__main
							}
						>
							<p className={cn(styles.s12, styles.c70)}>
								お打合せ後、打合せ内容についての詳細をお見積書にてご提
								示させていただきます。
							</p>
						</div>
					</div>
					<div className={styles.container__shooting__section}>
						<div
							className={styles.container__shooting__section__hd}
						>
							<Image
								src="/images/four.png"
								alt="4"
								width={44}
								height={44}
							/>
							<h2 className={cn(styles.h2, styles.c70)}>
								ご成約・ご予約金
							</h2>
						</div>
						<div
							className={
								styles.container__shooting__section__main
							}
						>
							<p className={cn(styles.s12, styles.c70)}>
								お見積り内容についてご了承頂けましたら、前金（見積価格
								の30%）をご入金頂き、ご成約完了となります。
								その際、ご請求書を送付させて頂きます。
							</p>
							<p className={cn(styles.s12, styles.c70)}>
								※全額前払可能
							</p>
						</div>
					</div>
					<div className={styles.container__shooting__section}>
						<div
							className={styles.container__shooting__section__hd}
						>
							<Image
								src="/images/five.png"
								alt="5"
								width={44}
								height={44}
							/>
							<h2 className={cn(styles.h2, styles.c70)}>
								撮影当日
							</h2>
						</div>
						<div
							className={
								styles.container__shooting__section__main
							}
						>
							<p className={cn(styles.s12, styles.c70)}>
								◇衣装お持ち込みの場合
								<br />
								　お客様の宿泊されているお部屋へ、ヘアメイクさんが
								<br />
								　お伺いしヘアメイク、衣装着付けをさせていただきま
								<br />
								　す。
							</p>
							<br />
							<p className={cn(styles.s12, styles.c70)}>
								◇衣装レンタルの場合
								<br />
								　お客様の宿泊されているお部屋へヘアメイクさんがお
								<br />
								　伺いしヘアメイク後、レンタル衣装屋さんへ移動し衣
								<br />
								　装着付けをさせていただきます。
							</p>
							<br />
							<p className={cn(styles.s12, styles.c70)}>
								◇お支度部屋もレンタルの場合（有料）
								<br />
								　レンタル衣装屋さんへお越しいただき、ヘアメイク衣装
								<br />
								　着付けをさせていただきます。
							</p>
						</div>
					</div>
					<div className={styles.container__shooting__section}>
						<div
							className={styles.container__shooting__section__hd}
						>
							<Image
								src="/images/six.png"
								alt="6"
								width={44}
								height={44}
							/>
							<h2 className={cn(styles.h2, styles.c70)}>撮影</h2>
						</div>
						<div
							className={
								styles.container__shooting__section__main
							}
						>
							<p className={cn(styles.s12, styles.c70)}>
								撮影集合場所へ移動し撮影開始！
								<br />
								　↓
								<br />
								プランによってロケーションを移動いたします。
								<br />
								　↓
								<br />
								撮影終了後は現地解散となります。
								<br />
								お着替えは簡易テントをご用意しております。
							</p>
						</div>
					</div>
					<div className={styles.container__shooting__section}>
						<div
							className={styles.container__shooting__section__hd}
						>
							<Image
								src="/images/seven.png"
								alt="7"
								width={44}
								height={44}
							/>
							<h2 className={cn(styles.h2, styles.c70)}>
								データ納品<span>(約1.5ヶ月)</span>
							</h2>
						</div>
						<div
							className={
								styles.container__shooting__section__main
							}
						>
							<p className={cn(styles.s12, styles.c70)}>
								ギガファイル便（DL期限100日）にて納品
								<br />
								特急納品オプション有り（¥12,000/納期１週間）
							</p>
						</div>
					</div>
					<div className={styles.container__shooting__section}>
						<div
							className={styles.container__shooting__section__hd}
						>
							<Image
								src="/images/eight.png"
								alt="8"
								width={44}
								height={44}
							/>
							<h2 className={cn(styles.h2, styles.c70)}>
								最終お支払い
							</h2>
						</div>
						<p className={cn(styles.s12, styles.c70, styles.ml)}>
							前金（見積価格の30%）でお支払いいただいた残額を
							<br />
							お支払いいただきます。
						</p>
					</div>
					<Link href="https://lin.ee/jx98HYF" className={styles.line}>
						公式ラインで無料相談をする
					</Link>
				</div>

				<div>
					<h2 className={cn(styles.h2, styles.c70)}>
						宮古島のロケーション
					</h2>
					<p className={cn(styles.c70, styles.trj10, styles.mb)}>
						“Miyako Island’s location”
					</p>
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
					<p className={styles.container__last__1}>
						あなたの大切な瞬間を、この一枚に…
					</p>
					<p className={styles.container__last__2}>
						We look forward to
						<br />
						welcoming you!!
					</p>
					<p className={styles.container__last__name}>ted</p>
					<Image
						src={images.image_16.url}
						alt="画像16"
						width={images.image_16.width}
						height={images.image_16.height}
						className={styles.container__last__img}
					/>
					<p className={styles.container__last__footer}>
						&copy; TEDDY PHOTO
					</p>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
