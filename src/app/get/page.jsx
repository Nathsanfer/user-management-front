"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import styles from './get.module.css';

// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/comments

export default function Get() {
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(false);

    const router = useRouter();

    const buscarComments = async () => {
        setLoading(true);

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
            setComments(response.data);
        } catch (error) {
            setError(true);
            console.error("❌ Erro ao buscar comentários:", error);
        } finally {
            setLoading(false);
        }
    };

    const navegarParaComentario = (commentId) => {
        router.push(`/get/${commentId}`);
    };

    useEffect(() => {
        buscarComments();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lista de Comentários</h1>

            <h2 className={styles.subtitle}>Comentários ({comments.length})</h2>
            {loading ? (
                <div className={styles.loading}>Carregando...</div>
            ) : (
                <ul className={styles.commentsList}>
                    {comments.map((comment) => (
                        <li
                            key={comment.id}
                            onClick={() => navegarParaComentario(comment.id)}
                            className={styles.commentItem}>
                            <hr className={styles.divider} />
                            <div className={styles.commentField}>
                                <span className={styles.fieldLabel}>ID:</span>
                                <span className={styles.idField}>{comment.id}</span>
                            </div>
                            <div className={styles.commentField}>
                                <span className={styles.fieldLabel}>Post ID:</span>
                                <span className={styles.postIdField}>{comment.postId}</span>
                            </div>
                            <div className={styles.commentField}>
                                <span className={styles.fieldLabel}>Nome:</span>
                                <p className={styles.fieldValue}>{comment.name}</p>
                            </div>
                            <div className={styles.commentField}>
                                <span className={styles.fieldLabel}>Email:</span>
                                <p className={`${styles.fieldValue} ${styles.emailField}`}>{comment.email}</p>
                            </div>
                            <div className={styles.commentField}>
                                <span className={styles.fieldLabel}>Comentário:</span>
                                <div className={styles.commentBody}>{comment.body}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {error && <p className={styles.errorMessage}>❌ Ocorreu um erro ao buscar os comentários.</p>}
        </div>
    );
}