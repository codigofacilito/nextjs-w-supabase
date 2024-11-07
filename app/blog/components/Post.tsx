import { FC } from "react";
import dayjs from "dayjs";
import Link from 'next/link';

import styles from "./Post.module.css";

type PostProps = {
    id: string;
    title: string;
    image: string;
    published_date: string;
    description: string;
    author: {
        first_name: string;
        last_name: string;
    };
    category: {
        name: string;
    };
};

const Post: FC<PostProps> = ({
    image,
    title,
    id,
    published_date: publishedDate,
    author,
    category,
    description,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.rightContainer}>
                <Link href={`/blog/${id}`}>
                    <h4 className={styles.title}>{title}</h4>
                </Link>
                <div className={styles.tagsContainer}>
                    <span className={styles.tagLabel}>
                        Fecha: 
                        <span className={styles.tagValue}>{dayjs(publishedDate).format("DD/M/YYYY")},</span>
                    </span>
                    <span className={styles.tagLabel}>
                        Autor:
                        <span className={styles.tagValue}>{`${author.first_name} ${author.last_name}`},</span>
                    </span>
                    <span className={styles.tagLabel}>
                        Categoria:
                        <span className={styles.tagValue}>{category.name}</span>
                    </span>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Post;