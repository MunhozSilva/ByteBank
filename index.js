import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 1234565);
diretor.cadastrarSenha("abc123");

const gerente = new Gerente("Adalberto", 5000, 54312623);
gerente.cadastrarSenha("def123");

const cliente = new Cliente("Lais", 61262380, "321qwe")

const clienteEstaLogado = SistemaAutenticacao.login(cliente,"321qwe")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"def123")
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"abc123")


console.log(clienteEstaLogado, gerenteEstaLogado, diretorEstaLogado);