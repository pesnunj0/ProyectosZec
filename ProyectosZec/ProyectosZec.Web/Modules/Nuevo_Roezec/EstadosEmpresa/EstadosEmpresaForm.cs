
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.EstadosEmpresa")]
    [BasedOnRow(typeof(Entities.EstadosEmpresaRow), CheckNames = true)]
    public class EstadosEmpresaForm
    {
        public String Estado { get; set; }
    }
}