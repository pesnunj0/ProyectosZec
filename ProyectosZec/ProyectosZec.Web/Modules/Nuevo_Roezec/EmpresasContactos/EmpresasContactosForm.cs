
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.EmpresasContactos")]
    [BasedOnRow(typeof(Entities.EmpresasContactosRow), CheckNames = true)]
    public class EmpresasContactosForm
    {
        public Int32 EmpresaId { get; set; }
        [DisplayName("Contacto")]
        public Int32 ContactoId { get; set; }
        public Int32 TipoContactoId { get; set; }
        public DateTime FechaBaja { get; set; }
    }
}