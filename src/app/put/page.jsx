"use client"
import { useState } from 'react';
import axios from 'axios';
import styles from './put.module.css';

export default function Edit() {
    const [commentID, setCommentID] = useState('');
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const buscarComentario = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments/${commentID}`);
            setForm({ name: data.name, email: data.email, body: data.body });
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const editarComentario = async () => {
        setLoading(true);
        try {
            await axios.put(`https://jsonplaceholder.typicode.com/comments/${commentID}`, form);
            setSuccess(true);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Editar Comentário</h1>

            <div className={styles.searchContainer}>
                <div className={styles.searchGroup}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>ID do Comentário</label>
                        <input
                            type='number'
                            value={commentID}
                            onChange={(e) => setCommentID(e.target.value)}
                            placeholder="Digite o ID do comentário"
                            className={styles.input}
                        />
                    </div>
                    <button 
                        onClick={buscarComentario} 
                        disabled={loading}
                        className={styles.searchButton}
                    >
                        {loading ? 'Carregando...' : 'Buscar Comentário'}
                    </button>
                </div>
            </div>

            {form.name && (
                <div className={styles.editContainer}>
                    <h2 className={styles.editTitle}>Editar Detalhes do Comentário</h2>
                    
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Nome</label>
                        <input
                            type='text'
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder='Digite seu nome completo'
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            type='email'
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder='Digite seu email'
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Comentário</label>
                        <textarea
                            value={form.body}
                            onChange={(e) => setForm({ ...form, body: e.target.value })}
                            placeholder='Digite seu comentário aqui'
                            rows={4}
                            className={styles.textarea}
                        />
                    </div>

                    <button 
                        onClick={editarComentario} 
                        disabled={loading || !form.name?.trim()}
                        className={styles.saveButton}
                    >
                        {loading ? 'Salvando...' : 'Salvar Comentário'}
                    </button>
                </div>
            )}

            {error && (
                <div className={styles.errorMessage}>
                    Ocorreu um erro. Tente novamente.
                </div>
            )}
            
            {success && (
                <div className={styles.successMessage}>
                    Comentário editado com sucesso!
                </div>
            )}
        </div>
    )
}

