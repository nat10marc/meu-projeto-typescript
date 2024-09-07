var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definição da classe de erro personalizado
var EmailInvalidoError = /** @class */ (function (_super) {
    __extends(EmailInvalidoError, _super);
    function EmailInvalidoError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'EmailInvalidoError';
        return _this;
    }
    return EmailInvalidoError;
}(Error));
function verificarEmail(email) {
    if (!email.includes('@')) {
        throw new EmailInvalidoError('Email inválido');
    }
}
try {
    verificarEmail('usuario.com'); // Isto deve lançar um erro
}
catch (error) {
    if (error instanceof EmailInvalidoError) {
        console.error(error.message); // Deve imprimir "Email inválido"
    }
    else {
        console.error('Um erro inesperado ocorreu:', error);
    }
}
