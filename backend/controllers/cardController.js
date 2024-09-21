import chalk from 'chalk';
import Joi from 'joi';
import db from '../db.js';

const generateCard = async (req, res) => {
    const { name, email, phone } = req.body;

    // Esquema de validação usando Joi
    const schema = Joi.object({
        name: Joi.string().min(2).required().messages({
            'string.empty': 'Nome é obrigatório.',
            'string.min': 'Nome inválido, deve ter pelo menos 2 caracteres.'
        }),
        email: Joi.string().email().required().messages({
            'string.empty': 'E-mail é obrigatório.',
            'string.email': 'E-mail inválido.'
        }),
        phone: Joi.string().pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/).required().messages({
            'string.empty': 'Telefone é obrigatório.',
            'string.pattern.base': 'Telefone inválido, use o formato (99) 99999-9999.'
        })
    });

    // Validando os dados do corpo da requisição
    const { error } = schema.validate({ name, email, phone });

    if (error) {
        const errorMsg = error.details[0].message;
        console.log(chalk.red(errorMsg));  // Log do erro no servidor
        return res.status(400).json({ error: errorMsg });
    }

    try {
        // Inserção no banco de dados
        let id_pessoa = await db('tb_pessoa')
            .insert({
                nome: name,
                email: email,
                telefone: phone
            })
            .returning('id_pessoa');  // Retorna o ID gerado

            id_pessoa = id_pessoa[0].id_pessoa;  // Ajuste para pegar o ID correto

        const successMsg = `Cartão de visita gerado com sucesso! ID Pessoa: ${id_pessoa}`;
        console.log(chalk.green(successMsg));  // Log de sucesso no servidor
        console.log(chalk.blue(`Nome: ${name}, E-mail: ${email}, Telefone: ${phone}`));  // Log dos dados

        return res.status(200).json({
            message: successMsg,
            data: {
                id_pessoa,
                name,
                email,
                phone
            }
        });
    } catch (err) {
        console.log(chalk.red('Erro ao inserir no banco de dados:', err));
        return res.status(500).json({ error: 'Erro no servidor ao gerar o cartão de visita.' });
    }
};

// Função para consultar todas as pessoas
const getAllPeople = async (req, res) => {
    try {
        const people = await db('tb_pessoa').select('*');  // Consulta todos os registros da tabela
        console.log(chalk.green(`Consultando todas as pessoas: ${people.length} pessoas encontradas.`));
        res.status(200).json(people);
    } catch (err) {
        console.log(chalk.red('Erro ao buscar pessoas:', err));
        res.status(500).json({ error: 'Erro no servidor ao buscar pessoas.' });
    }
};

// Função para consultar uma pessoa por ID
const getPersonById = async (req, res) => {
    const { id_pessoa } = req.params;

    try {
        const person = await db('tb_pessoa').where({ id_pessoa }).first();  // Busca a pessoa por ID

        if (!person) {
            const notFoundMsg = `Pessoa com ID ${id_pessoa} não encontrada.`;
            console.log(chalk.yellow(notFoundMsg));  // Log de não encontrado
            return res.status(404).json({ error: notFoundMsg });
        }

        console.log(chalk.green(`Pessoa com ID ${id_pessoa} encontrada: ${person.nome}.`));
        res.status(200).json(person);
    } catch (err) {
        console.log(chalk.red('Erro ao buscar a pessoa:', err));
        res.status(500).json({ error: 'Erro no servidor ao buscar a pessoa.' });
    }
};

export { generateCard, getAllPeople, getPersonById };
