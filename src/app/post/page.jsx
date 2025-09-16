"use client";
import { useState } from "react";
import axios from "axios";
import styles from './post.module.css';

export default function PostPage() {
    const [loading, setLoading] = useState(false);
    const [addedComment, setAddedComment] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        body: ""
    });
    const [error, setError] = useState(false);
    
    const criarNovoComment = async () => {
        setLoading(true);
        setError(false);
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/comments", {
                name: form.name.trim(),
                email: form.email.trim(),
                body: form.body.trim(),
            });
            setAddedComment([response.data, ...addedComment]);
            setForm({name: "", email: "", body: ""});
        } catch (error) {
            setError(true);
            console.error("❌ Erro ao criar um novo comentário:", error);
        } finally {
            setLoading(false);
        }
    }

    const atualizarForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Criar Comentários</h1>

            <div className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nome</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Digite seu nome completo"
                        value={form.name}
                        onChange={atualizarForm}
                        className={styles.input}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Digite seu melhor email"
                        value={form.email}
                        onChange={atualizarForm}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Comentário</label>
                    <textarea
                        name="body"
                        placeholder="Escreva seu comentário aqui..."
                        value={form.body}
                        onChange={atualizarForm}
                        className={styles.textarea}
                        rows={4}
                    />
                </div>

                <button 
                    onClick={criarNovoComment} 
                    disabled={!form.name.trim() || loading}
                    className={styles.button}
                >
                    {loading ? "Criando..." : "Criar Comentário"}
                </button>
            </div>

            {error && (
                <div className={styles.errorMessage}>
                    ❌ Erro ao criar comentário. Tente novamente.
                </div>
            )}

            <div className={styles.commentsSection}>
                <h2 className={styles.commentsTitle}>
                    Comentários Adicionados ({addedComment.length})
                </h2>
                
                {addedComment.length === 0 ? (
                    <div className={styles.emptyState}>
                        Nenhum comentário criado ainda. Crie o primeiro!
                    </div>
                ) : (
                    <ul className={styles.commentsList}>
                        {addedComment.map((comment) => (
                            <li key={comment.id} className={styles.commentItem}>
                                <div className={styles.commentField}>
                                    <div className={styles.fieldLabel}>Nome:</div>
                                    <p className={styles.commentName}>{comment.name}</p>
                                </div>
                                <div className={styles.commentField}>
                                    <div className={styles.fieldLabel}>Email:</div>
                                    <p className={styles.commentEmail}>({comment.email})</p>
                                </div>
                                <div className={styles.commentField}>
                                    <div className={styles.fieldLabel}>Comentário:</div>
                                    <p className={styles.commentBody}>{comment.body}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}