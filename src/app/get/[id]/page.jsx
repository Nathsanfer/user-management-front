"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

import styles from './[id].module.css';

// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/comments

export default function GetByIdPage() {
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState(null);
    const [error, setError] = useState(false);

    const params = useParams();
    const router = useRouter();
    const commentId = params.id;

    const buscarComentario = async () => {
        setLoading(true);

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
            setComment(response.data);
        } catch (error) {
            setError(true);
            console.error("❌ Erro ao buscar comentário:", error);
        } finally {
            setLoading(false);
        }
    };

    const voltarParaLista = () => {
        router.push('/get');
    };

    useEffect(() => {
        buscarComentario();
    }, [commentId]);

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>
                    ⏳ Carregando comentário...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <button onClick={voltarParaLista} className={styles.backButton}>
                    ← Voltar à lista
                </button>
                <div className={styles.error}>
                    ❌ Erro ao buscar comentário.
                </div>
            </div>
        );
    }

    if (!comment) {
        return (
            <div className={styles.container}>
                <button onClick={voltarParaLista} className={styles.backButton}>
                    ← Voltar à lista
                </button>
                <div className={styles.notFound}>
                    🔍 Nenhum comentário encontrado.
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <button onClick={voltarParaLista} className={styles.backButton}>
                ← Voltar à lista
            </button>
            
            <h1 className={styles.title}>Detalhes do Comentário</h1>
            
            <div className={styles.commentCard}>
                <div className={styles.commentHeader}>
                    <span className={styles.idBadge}>ID: {comment.id}</span>
                    <span className={styles.postIdBadge}>Post ID: {comment.postId}</span>
                </div>

                <div className={styles.commentField}>
                    <span className={styles.fieldLabel}>Nome:</span>
                    <p className={styles.nameField}>{comment.name}</p>
                </div>

                <div className={styles.commentField}>
                    <span className={styles.fieldLabel}>Email:</span>
                    <p className={styles.emailField}>{comment.email}</p>
                </div>

                <div className={styles.commentField}>
                    <span className={styles.fieldLabel}>Comentário:</span>
                    <p className={styles.commentBody}>{comment.body}</p>
                </div>
            </div>
        </div>
    );
}