import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { DropdownService } from '../shared/dropdown.service';
import { EstadosBr } from '../../assets/models/estados-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup
  estados: any
  cargos: any[]
  tecnologias: any
  newsletterOp: any[]
  frameworks = ['Angular', 'React', 'Vue', 'Ionic']
  


  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [],
        rua: [],
        bairro: [],
        cidade: [],
        estado: [],
      }),
      cargo: [null],
      tecnologia:[null],
      newsletter: ['s'],
      termos: [null, Validators.pattern("true")],
      frameworks: [null]
    })

    this.estados = this.dropdownService.getEstadosBr()

    this.cargos = this.dropdownService.getCargos()
    this.tecnologias = this.dropdownService.getTecnologias()
    this.newsletterOp = this.dropdownService.getNewsletter()


    // this.dropdownService.getEstadosBr()
    //   .subscribe((dados: EstadosBr[]) => {
    //     this.estados = dados
    //     console.log(this.estados)
    //   })
  }

  onSubmit() {
    if (!this.formulario.valid) {
      this.verificaValidacoesForm(this.formulario)
      return false
    }
    this.http.post('endereco/post', JSON.stringify(this.formulario.value))
      .pipe(map(res => res))
      .subscribe(dados => {
        //this.formulario.reset()
      },
        (error: any) => alert("erro"))
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo)
      const controle = formGroup.get(campo);
      controle.markAsTouched()
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle)
      }
    })
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value

    if (cep) {
      this.consultaCepService.consultaCEP(cep)
        .pipe(map((res: Response) => res.json()))
        .subscribe(dados => this.populaDadosForm(dados))
    }
  }

  populaDadosForm(dados) {
    console.log("dados:" + dados)
    // form.setValue({
    //   nome: form.value.nome,
    //   email: form.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep.replace('-', ''),
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // })

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  aplicaCssErro(campo: string) {
    if (campo) {
      return {
        'has-error': this.verificaValidTouched(campo),
        'has-feedback': this.verificaValidTouched(campo)
      };
    }
  }

  resetar() {
    this.formulario.reset()
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'pleno', desc: 'Dev pl' }
    this.formulario.get('cargo').setValue(cargo)
  }

  onDestroy() {
    console.log("destruiu: ")
    console.log(this.estados)
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nivel === obj2.nivel) : obj1 === obj2
  }

  setarTecnologias(obj1, obj2) {
    this.formulario.get('tecnologia').setValue(['java', 'javascript', 'php'])
  }

}
