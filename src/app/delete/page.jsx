"use client";

import styles from "./delete.module.css";

import axios from "axios";
import { useState } from "react";

export default function Delete() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [comment, setComment] = useState(null);
    const [commentId, setCommentId] = useState("");

    const buscarComentario = async () => {
        setLoading(true);
        setError(false);

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${commentId}`);
            setComment(response.data);
        } catch (error) {
            setError(true);
            console.error("Erro ao buscar comentário:", error);
        } finally {
            setLoading(false);
        }
    }

    const deletarComentario = async () => {
        setLoading(true);
        setError(false);
        setSuccess(false);

        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${commentId}`)
            setSuccess(true);
            setComment(null);
            setCommentId("");
        } catch (error) {
            setError(true);
            console.error("Erro ao deletar comentário:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Deletar Comentário</h1>
            
            <div className={styles.searchContainer}>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        value={commentId}
                        onChange={(e) => setCommentId(e.target.value)}
                        placeholder="Digite o ID do comentário"
                        className={styles.input}
                    />
                    <button 
                        onClick={buscarComentario} 
                        disabled={loading || !commentId}
                        className={styles.button}
                    >
                        {loading ? "Buscando..." : "Buscar"}
                    </button>
                </div>
            </div>

            {comment && (
                <div className={styles.commentContainer}>
                    <h2 className={styles.commentTitle}>Comentário Encontrado: {comment.id}</h2>
                    
                    <div className={styles.commentField}>
                        <span className={styles.fieldLabel}>Título:</span>
                        <p className={styles.fieldValue}>{comment.title}</p>
                    </div>
                    
                    <div className={styles.commentField}>
                        <span className={styles.fieldLabel}>Conteúdo:</span>
                        <div className={styles.commentBody}>{comment.body}</div>
                    </div>

                    <button 
                        onClick={deletarComentario} 
                        disabled={loading}
                        className={styles.deleteButton}
                    >
                        {loading ? "Deletando..." : "🗑️ Deletar Comentário"}
                    </button>
                </div>
            )}

            {error && <p className={styles.error}>❌ Ocorreu um erro. Tente novamente.</p>}
            {success && <p className={styles.success}>✅ Comentário deletado com sucesso!</p>}
        </div>
    )
}