var Cervas = Cervas || {};

Cervas.ComboEstado = (function() {
	
	function ComboEstado() {
		this.combo = $('#estado');
		this.emitter = $({});
		this.on = this.emitter.on.bind(this.emitter);
	}
	
	ComboEstado.prototype.iniciar = function() {
		this.combo.on('change', onEstadoAlterado.bind(this))
	}
	
	function onEstadoAlterado() {
		this.emitter.trigger('alterado', this.combo.val())

	}
	
	return ComboEstado;
	
}());

Cervas.ComboCidade = (function() {
	
	function ComboCidade(comboEstado) {
		this.comboEstado = comboEstado;
		this.combo = $('#cidade');
		this.imgLoading = $('.js-img-loading');
	}
	
	ComboCidade.prototype.iniciar = function() {
		this.comboEstado.on('alterado', onEstadoAlterado.bind(this));
		reset.call(this)
	}
	
	function onEstadoAlterado(evento, codigoEstado) {	
		if(codigoEstado){
			var resposta = $.ajax({
				url: this.combo.data('url'),
				method: 'GET',
				contentType: 'application/json',
				data: { 'estado': codigoEstado },
				beforeSend: iniciarRequisicao.bind(this), 
				complete: finalizarRequisicao.bind(this),
			});
			
			resposta.done(onBuscarCidadesFinalizado.bind(this));
		} else {
			reset.call(this)
		}
	}
	
	function onBuscarCidadesFinalizado(cidades) {
		var options = [];
		cidades.forEach(function(cidade) {
			options.push('<option value"' + cidade.codigo + '">' + cidade.nome + '</option>' );
		}); 
		
		this.combo.html(options.join(''));
		this.combo.removeAttr('disabled');
		
	}
	
	function reset() {
		this.combo.html('<option value="">Selecione a Cidade</option>');
		this.combo.val('');
		this.combo.attr('disabled', 'disabled');
	}

	function iniciarRequisicao() {
		reset.call(this)
		this.imgLoading.show();
	}

	function finalizarRequisicao() {
		this.imgLoading.hide();
	}
	
	return ComboCidade;
}());

$(function(){
	var comboEstado = new Cervas.ComboEstado();
	comboEstado.iniciar();
	
	var comboCidade = new Cervas.ComboCidade(comboEstado)
	comboCidade.iniciar();
	
});