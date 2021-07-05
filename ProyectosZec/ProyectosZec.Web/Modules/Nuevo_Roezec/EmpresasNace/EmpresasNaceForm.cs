
namespace ProyectosZec.Nuevo_Roezec.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Nuevo_Roezec.EmpresasNace")]
    [BasedOnRow(typeof(Entities.EmpresasNaceRow), CheckNames = true)]
    public class EmpresasNaceForm
    {
        public Int32 EmpresaId { get; set; }
        public Int32 NaceId { get; set; }
    }
}